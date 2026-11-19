// Round 2 review page: one plan at a time, plan on the left, Part 1, Part 2 and the overall question on the right.
let packet, form, plans = [], responses = {}, reviewer = '', current = -1, timer;

const esc = x => String(x ?? '').replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
const fmt = x => {
  if (x === null || x === undefined || x === '') return '<span class="missing">Not reported</span>';
  if (Array.isArray(x)) return x.length ? `<ul>${x.map(v => `<li>${fmt(v)}</li>`).join('')}</ul>` : '<span class="missing">Not reported</span>';
  if (typeof x === 'object') return `<dl>${Object.entries(x).map(([k, v]) => `<dt>${esc(k.replaceAll('_', ' '))}</dt><dd>${fmt(v)}</dd>`).join('')}</dl>`;
  return esc(x);
};
const row = (label, value) => `<div class="label">${esc(label)}</div><div class="value">${value}</div>`;
const fileLink = (path, label) => `<a class="file-link" target="_blank" href="viewer.html?path=${encodeURIComponent(path)}&analysis=${encodeURIComponent(plans[0].id)}">${esc(label)} <span aria-hidden="true">↗</span></a>`;

// Each reviewer sees the plans in their own fixed order, so order effects average out across reviewers.
function reviewerOrder(items, name) {
  let state = [...name].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
  const next = () => (state = (state * 1664525 + 1013904223) >>> 0) / 2 ** 32;
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const blank = () => ({part1: {}, part2: {}, overall: '', overall_explanation: '', comments: ''});
const answers = plan => (responses[plan.id] = responses[plan.id] || blank());
const isDone = plan => responses[plan.id]?.submitted === true;
const contextDone = () => responses._paper_review?.source_ready === true;

// Everything still missing before this plan can be submitted; an empty list means it is complete.
function missing(r) {
  const out = [];
  for (const element of packet.claim_elements) {
    const answer = r.part1[element.key] || {};
    if (!answer.rating) out.push(`Part 1: rate ${element.label}`);
    else if (answer.rating !== form.part1.ratings[0] && !String(answer.note || '').trim()) out.push(`Part 1: add a note for ${element.label}`);
  }
  for (const category of form.part2.categories) {
    const answer = r.part2[category.key] || {};
    if (!answer.answer) out.push(`Part 2: answer ${category.title}`);
    else if (answer.answer === 'Yes') {
      const other = !!answer.other_ticked;
      if (!(answer.items || []).length && !other) out.push(`Part 2: tick at least one problem under ${category.title}`);
      if (other && !String(answer.other || '').trim()) out.push(`Part 2: describe "Other" under ${category.title}`);
    }
  }
  if (!r.overall) out.push('Overall: choose an answer');
  else if (r.overall !== 'Yes' && !String(r.overall_explanation || '').trim()) out.push('Overall: add a one-sentence explanation');
  return out;
}

function variable(v) {
  if (!v) return '<span class="missing">Not reported</span>';
  const construction = v.variable_construction ? `<div class="proposal-detail"><b>Construction:</b> ${esc(v.variable_construction)}</div>` : '';
  return `${v.name ? `<b>${esc(v.name)}</b> — ` : ''}${esc(v.definition || 'Definition not reported')}${construction}`;
}

function planView(plan) {
  const r = plan.plan.review;
  const others = (r.additional_variables || []).length ? r.additional_variables.map(variable).join('<hr>') : 'None reported.';
  return `<h3>The plan</h3><div class="grid">
    ${row('Quantity to be estimated', fmt(r.quantity))}${row('Target population', fmt(r.target_population))}
    ${row('Time or setting', fmt(r.time_scope))}${row('Outcome', variable(r.outcome))}
    ${row('Focal predictor', variable(r.main_predictor))}${row('Other model terms', others)}
    ${row('Analysis method', fmt(r.model_type))}${row('Model formula', `<code>${esc(r.formula)}</code>`)}
    ${row('Focal result', fmt(r.planned_estimation))}${row('Expected direction', fmt(r.expected_direction))}
    ${row('Sample and exclusions', fmt(r.sample_audit))}${row('Missing data', fmt(plan.plan.missing_data))}
    ${row('Outliers', fmt(plan.plan.outliers))}${row('Steps', fmt(r.preprocessing_steps))}
    ${row('Decision rule', fmt(r.decision_rule))}</div>`;
}

const radios = (name, options, value, path) => `<div class="choices">${options.map(option => `<label><input type="radio" name="${esc(name)}" data-path="${esc(path)}" value="${esc(option)}" ${value === option ? 'checked' : ''}> ${esc(option)}</label>`).join('')}</div>`;

function part1View(r) {
  const rows = packet.claim_elements.map(element => {
    const answer = r.part1[element.key] || {};
    const note = answer.rating && answer.rating !== form.part1.ratings[0];
    return `<div class="element"><div class="element-label">${esc(element.label)}</div><p class="element-text">${esc(element.text)}</p>
      ${radios(`p1-${element.key}`, form.part1.ratings, answer.rating, `part1.${element.key}.rating`)}
      ${note ? `<textarea data-path="part1.${esc(element.key)}.note" placeholder="What differs?">${esc(answer.note || '')}</textarea>` : ''}</div>`;
  }).join('');
  return `<section class="review-card"><p class="step-label">Part 1</p><h3>${esc(form.part1.title)}</h3><p>${esc(form.part1.intro)}</p>${rows}</section>`;
}

function categoryView(category, r) {
  const answer = r.part2[category.key] || {};
  const ticks = `<div class="ticks"><p class="ticks-label">Typical problems</p>
    ${category.items.map(item => `<label><input type="checkbox" data-tick="${esc(category.key)}" value="${esc(item.key)}" ${(answer.items || []).includes(item.key) ? 'checked' : ''}><span>${esc(item.text)}</span></label>`).join('')}
    <label><input type="checkbox" data-path="part2.${esc(category.key)}.other_ticked" ${answer.other_ticked ? 'checked' : ''}><span>Other</span></label>
    ${answer.other_ticked ? `<textarea data-path="part2.${esc(category.key)}.other" placeholder="Describe the problem">${esc(answer.other || '')}</textarea>` : ''}
    ${answer.answer === 'Yes' ? `<textarea data-path="part2.${esc(category.key)}.comment" placeholder="Optional comment">${esc(answer.comment || '')}</textarea>` : ''}</div>`;
  return `<div class="category"><p class="category-title">${esc(category.key)}. ${esc(category.title)}: significant problem in this area?</p>
    ${radios(`p2-${category.key}`, form.part2.answers, answer.answer, `part2.${category.key}.answer`)}${ticks}</div>`;
}

function part2View(r, firstPlan) {
  return `<section class="review-card"><p class="step-label">Part 2</p><h3>${esc(form.part2.title)}</h3>
    <details class="instructions" ${firstPlan ? 'open' : ''}><summary>Instructions</summary>${form.part2.instructions.map(text => `<p>${esc(text)}</p>`).join('')}</details>
    <p class="caveat">${esc(form.part2.caveat)}</p>
    ${form.part2.categories.map(category => categoryView(category, r)).join('')}</section>`;
}

function overallView(r) {
  const explain = r.overall && r.overall !== 'Yes';
  return `<section class="review-card"><p class="step-label">Overall</p><h3>${esc(form.overall.question)}</h3><p class="help">${esc(form.overall.guidance)}</p>
    ${radios('overall', form.overall.answers, r.overall, 'overall')}
    ${explain ? `<textarea data-path="overall_explanation" placeholder="One sentence: what led you to this answer?">${esc(r.overall_explanation || '')}</textarea>` : ''}
    <textarea data-path="comments" placeholder="Optional comments on this plan">${esc(r.comments || '')}</textarea></section>`;
}

function renderContext() {
  const sources = packet.source_materials.support_files;
  const card = f => `<div class="material material-${esc(f.kind)}"><span class="file-icon">${esc((f.extension || 'FILE').replace('.', '').slice(0, 5).toUpperCase())}</span><div><b>${esc(f.name)}</b>${f.used_in_plans ? ' <span class="used-badge">Main data file</span>' : ''}<br>${fileLink(f.path, 'View file')}</div></div>`;
  const main = sources.filter(f => f.used_in_plans || f.kind === 'documentation'), others = sources.filter(f => !main.includes(f));
  document.querySelector('#content').innerHTML = `<section class="review-card"><p class="step-label">Before you begin</p><h3>The claim and the paper</h3>
    <p>Every plan you will review aims to test this claim:</p><blockquote>“${esc(packet.case.focal_claim)}”</blockquote>
    <p>Read enough of the paper to understand the claim and its context. You can come back to these materials at any time.</p>
    <p class="no-ai-notice"><b>Do not use AI tools for this evaluation.</b> Base your answers on your own review.</p>
    <div class="materials"><div class="material primary-material"><span class="file-icon">PDF</span><div><b>Original paper</b><br>${fileLink(packet.source_materials.paper, 'View original paper')}</div></div>${main.map(card).join('')}</div>
    ${others.length ? `<details class="other-materials"><summary>Other files in the reproduction package (${others.length}): optional</summary><div class="materials">${others.map(card).join('')}</div></details>` : ''}
    ${contextDone() ? '<p class="completed-note">✓ Ready to review</p>' : '<div class="section-action"><button class="primary" id="context-done">I have enough context to begin</button></div>'}</section>`;
  document.querySelector('#context-done')?.addEventListener('click', async () => {
    responses._paper_review = {source_ready: true};
    await post('_paper_review', responses._paper_review);
    open(firstOpen());
  });
}

function renderPlan() {
  const plan = plans[current], r = answers(plan), done = isDone(plan);
  if (!done && !r.started_at) { r.started_at = new Date().toISOString(); scheduleSave(); }
  document.querySelector('#content').innerHTML = `<div class="analysis-heading"><div><p class="eyebrow">Plan ${current + 1} of ${plans.length}</p><h2>Plan ${current + 1}</h2></div></div>
    <div class="plan-layout"><div class="plan-column">${planView(plan)}</div><div class="form-column">
    <p class="claim-reminder"><b>Claim:</b> “${esc(packet.case.focal_claim)}”</p>
    ${part1View(r)}${part2View(r, current === 0)}${overallView(r)}
    ${done ? '<p class="completed-note">✓ Submitted — answers are locked</p>' : '<div class="section-action"><div class="submit-row"><button class="primary" id="submit">Submit this plan</button></div><div id="submit-problems"></div></div>'}
    </div></div>`;
  if (done) document.querySelectorAll('.form-column input, .form-column textarea').forEach(el => { el.disabled = true; });
  document.querySelector('#submit')?.addEventListener('click', submit);
}

function renderFinished() {
  document.querySelector('#content').innerHTML = '<div class="completion-screen"><div class="completion-check" aria-hidden="true">✓</div><p class="eyebrow">Review complete</p><h2>You have reviewed every plan for this paper</h2><p>Your responses have been saved. You may now close this page.</p></div>';
}

function renderNav() {
  document.querySelector('#progress').textContent = `${plans.filter(isDone).length} of ${plans.length} plans complete`;
  const button = (i, label, cls) => `<button data-i="${i}" class="${i === current ? 'active ' : ''}${cls}" ${i >= 0 && !contextDone() ? 'disabled' : ''}>${esc(label)}</button>`;
  document.querySelector('#nav').innerHTML = button(-1, 'Claim and paper', contextDone() ? 'done' : '') + plans.map((plan, i) => button(i, `Plan ${i + 1}`, isDone(plan) ? 'done' : '')).join('');
  document.querySelectorAll('#nav button').forEach(b => { b.onclick = () => open(+b.dataset.i); });
}

function open(index) {
  current = index;
  document.body.classList.toggle('plan-mode', current >= 0 && current < plans.length);
  renderNav();
  if (current === plans.length) renderFinished();
  else if (current < 0) renderContext();
  else renderPlan();
  window.scrollTo(0, 0);
}

const firstOpen = () => { const i = plans.findIndex(plan => !isDone(plan)); return i < 0 ? plans.length : i; };

function setPath(target, path, value) {
  const keys = path.split('.'), last = keys.pop();
  const parent = keys.reduce((node, key) => (node[key] = node[key] || {}), target);
  parent[last] = value;
}

// Ticking a problem means Yes for that category; answering No or Can't tell clears its ticks.
function syncCategory(r, key) {
  const entry = r.part2[key];
  if (entry.answer && entry.answer !== 'Yes') Object.assign(entry, {items: [], other_ticked: false, other: '', comment: ''});
}

// Radios and ticks can show or hide fields, so they redraw the plan; typing only saves, which keeps the cursor in place.
function onInput(event) {
  const el = event.target;
  if (current < 0 || current >= plans.length || isDone(plans[current])) return;
  const r = answers(plans[current]);
  if (el.dataset.tick) {
    const entry = r.part2[el.dataset.tick] = r.part2[el.dataset.tick] || {};
    const items = new Set(entry.items || []);
    el.checked ? items.add(el.value) : items.delete(el.value);
    entry.items = [...items];
    if (el.checked) entry.answer = 'Yes';
  } else if (el.dataset.path) {
    setPath(r, el.dataset.path, el.type === 'checkbox' ? el.checked : el.value);
    const [part, key, field] = el.dataset.path.split('.');
    if (part === 'part2' && field === 'other_ticked' && el.checked) r.part2[key].answer = 'Yes';
    if (part === 'part2' && field === 'answer') syncCategory(r, key);
  } else return;
  scheduleSave();
  if (el.tagName !== 'TEXTAREA') redraw();
}

// Redraws the plan without moving the page or either panel.
function redraw() {
  const panels = ['.plan-column', '.form-column'], scroll = window.scrollY;
  const tops = panels.map(selector => document.querySelector(selector).scrollTop);
  renderPlan();
  panels.forEach((selector, i) => { document.querySelector(selector).scrollTop = tops[i]; });
  window.scrollTo(0, scroll);
}

async function post(id, payload) {
  const result = await apiFetch('/api/responses', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({annotator: reviewer, analysis_id: id, payload})});
  document.querySelector('#save-state').textContent = result.ok ? 'Saved' : 'Save failed';
  return result.ok;
}

function scheduleSave() {
  document.querySelector('#save-state').textContent = 'Unsaved changes';
  const plan = plans[current];
  clearTimeout(timer);
  timer = setTimeout(() => post(plan.id, {...responses[plan.id], task_id: plan.task_id}), 600);
}

async function submit() {
  const plan = plans[current], r = answers(plan), problems = missing(r);
  const box = document.querySelector('#submit-problems');
  if (problems.length) { box.innerHTML = `<ul class="problems">${problems.map(p => `<li>${esc(p)}</li>`).join('')}</ul>`; return; }
  if (!confirm('Submit this plan? You will not be able to change these answers afterward.')) return;
  clearTimeout(timer);
  const saved = {...r, task_id: plan.task_id, submitted: true, submitted_at: new Date().toISOString()};
  if (!await post(plan.id, saved)) return;
  responses[plan.id] = saved;
  open(firstOpen());
}

async function load() {
  const session = await apiFetch('/api/session').then(r => r.json());
  if (!session.authenticated) { location.href = 'login.html'; return; }
  reviewer = session.annotator || 'local-annotator';
  packet = await apiFetch('/api/packet').then(r => r.json());
  form = packet.form;
  plans = reviewerOrder(packet.analyses, reviewer);
  const rows = await apiFetch('/api/responses/' + encodeURIComponent(reviewer)).then(r => r.json());
  for (const [id, value] of Object.entries(rows)) responses[id] = value.payload;
  document.querySelector('#paper-title').textContent = packet.case.paper_title || '';
  document.querySelector('#reviewer').innerHTML = esc(reviewer) + (window.APP_CONFIG.apiBase ? '' : ' <span class="prototype-tag">Prototype</span>');
  document.querySelector('#content').addEventListener('input', onInput);
  open(contextDone() ? firstOpen() : -1);
}

load();
