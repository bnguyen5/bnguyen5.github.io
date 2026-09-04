---
layout: single
title: "Natural Language Processing — Fall 2026"
permalink: /teaching/nlp-fall-2026/
author_profile: false
course_page: true
hide_masthead: true
favicon: /images/favicon-nlp.svg
day1_slides_url: "https://docs.google.com/presentation/d/1xP-5uIgFIFxVcv0wjKJSTZDZLe2EBqt80B1mO3-hwT0/edit?usp=sharing"
day2_slides_url: "https://docs.google.com/presentation/d/1IBARWiW3jb8M6kRoNMGRdU_n6bHF4Ft5rzF69rQA8ao/edit?usp=sharing"
day3_slides_url: "https://docs.google.com/presentation/d/1t8-NBW3OYgpLPWZcqO9z-ze2nxIhf_CwOPM-4FbQFRw/edit?usp=sharing"
w2_slides_url: "https://docs.google.com/presentation/d/1SP3gUsdDbn7Tfk4sJUz0zkdULKu60pDgoh3eEi-mxFY/edit?usp=sharing"
w2d3_slides_url: "https://docs.google.com/presentation/d/1TaNJRUnea12bMJM8sAwgteLY_X67bm2ooP3dxR27GGM/edit?usp=sharing"
pm1_description_url: "https://docs.google.com/document/d/11qZpMnT9W837qiWsfr5sR6l8rXaI7J0xmVFmOfPDXbI/edit?usp=sharing"
hw1_url: "https://colab.research.google.com/drive/1jUs4f98pAUknLC0Zm8-OHmj4XDAI4IC2?usp=sharing"
---

<div class="course-page">
  <header class="course-hero">
    <span class="course-kicker">CSE 40657 · Fall 2026</span>
    <h1>Natural Language Processing</h1>
    <p class="course-lede">Foundations and modern methods for building computational systems that understand and generate human language.</p>
    <div class="course-actions">
      <a class="btn btn--primary" href="#schedule">Course schedule</a>
      <a class="btn course-btn-secondary" href="#policies">Course policies</a>
    </div>
    <div class="course-greetings" aria-hidden="true">
      <span class="greeting-hello">Hello</span>
      <span class="greeting-vietnamese">Xin chào</span>
      <span class="greeting-french">Bonjour</span>
      <span class="greeting-spanish">Hola</span>
      <span class="greeting-chinese">你好</span>
      <span class="greeting-arabic">مرحبًا</span>
      <span class="greeting-hindi">नमस्ते</span>
    </div>
  </header>

  <section class="course-facts" aria-label="Course information">
    <div class="course-fact">
      <span>Instructor</span>
      <strong>Bang Nguyen</strong>
      <a href="mailto:bnguyen5@nd.edu">bnguyen5@nd.edu</a>
    </div>
    <div class="course-fact">
      <span>Meetings</span>
      <span><strong>Time:</strong> MWF 11:30 AM–12:20 PM</span>
      <span><strong>Location:</strong> Stinson Remick 108</span>
    </div>
    <div class="course-fact">
      <span>Office hours</span>
      <span><strong>Time:</strong> Monday 1-2 PM; Friday 1-3 PM</span>
      <span><strong>Location</strong>: 313 Cushing</span>
    </div>
    <div class="course-fact">
      <span>Relevant platforms</span>
      <span><strong>Assignment submission:</strong> <a href="https://canvas.nd.edu/courses/145184" target="_blank">Canvas</a></span>
      <span><strong>Discussion:</strong> Slack (access from Canvas)</span>
    </div>
  </section>

  <section class="course-section">
    <div class="course-section-heading">
      <span>01</span>
      <div>
        <p>Overview</p>
        <h2>About the course</h2>
      </div>
    </div>
    <div class="course-two-column">
      <div>
        <p>This course provides an overview of both foundational and modern methodologies and tasks for the computational processing of human language, from probabilistic language models, sequence tagging, and syntactic parsing, to neural, transformer-based architectures that power emerging language assistants and AI agents like OpenAI’s ChatGPT, Google’s Gemini, and Claude Code. Homework assignments are designed to familiarize students with Python and PyTorch. Students have the opportunity to deepen their understanding of these concepts via a semester-long project.</p>
      </div>
    </div>

    <div class="course-learning-block">
      <h3>Learning objectives</h3>
      <p>By the end of this course, students will be able to:</p>
      <ul>
        <li>Explain foundational and modern NLP methods.</li>
        <li>Implement NLP models using Python and PyTorch.</li>
        <li>Evaluate language-processing systems using appropriate metrics.</li>
        <li>Analyze the capabilities and limitations of neural and transformer-based models.</li>
        <li>Design, execute, and communicate an NLP project.</li>
      </ul>
    </div>

    <div class="course-reading-block">
      <h3>Reading materials</h3>
      <p>The primary textbook for the course is:</p>
      <ol class="course-reading-list">
        <li>
          <strong><a href="https://web.stanford.edu/~jurafsky/slp3/" target="_blank" rel="noopener">Speech and Language Processing (3rd ed. draft)</a></strong><br>
          Dan Jurafsky and James H. Martin
        </li>
      </ol>
      <p>Additional readings, including research papers, tutorials, and other online resources, may be assigned throughout the semester.</p>
    </div>

  </section>

  <section class="course-section" id="schedule">
    <div class="course-section-heading">
      <span>02</span>
      <div>
        <p>Materials</p>
        <h2>Schedule</h2>
      </div>
    </div>
    <p class="course-section-intro"><strong>Check back regularly for schedule updates and assignment due dates.</strong></p>
    <p class="course-special-topics-note"><strong>Tentative special topics:</strong> Weeks 11–14 may change based on student interests, project needs, and course pace.</p>
    <div class="course-resource-legend" aria-label="Resource legend">
      <span class="course-resource-legend-label">Resources:</span>
      <span class="course-tag course-tag--slides course-tag--legend">Slides</span>
      <span class="course-tag course-tag--reading course-tag--legend">Reading</span>
    </div>

    <div class="course-table-wrap">
      <table class="course-schedule">
        <thead>
          <tr>
            <th>Week</th>
            <th>Date(s)</th>
            <th>Topic</th>
            <th>Slides &amp; readings</th>
            <th>Due</th>
          </tr>
        </thead>
        <tbody>
          <tr class="course-week-start"><td rowspan="3"><strong>1</strong><small>Overview</small></td><td>Mon., Aug. 24</td><td><strong>Welcome and syllabus</strong></td><td>{% if page.day1_slides_url != "" %}<a class="course-tag course-tag--slides" href="{{ page.day1_slides_url }}" target="_blank" rel="noopener">W1D1</a>{% else %}<span class="course-tag course-tag--slides">W1D1</span>{% endif %}</td><td>—</td></tr>
          <tr><td>Wed., Aug. 26</td><td><strong>NLP tasks and ML foundations</strong></td><td>{% if page.day2_slides_url != "" %}<a class="course-tag course-tag--slides" href="{{ page.day2_slides_url }}" target="_blank" rel="noopener">W1D2</a>{% else %}<span class="course-tag course-tag--slides">W1D2</span>{% endif %}</td><td>—</td></tr>
          <tr><td>Fri., Aug. 28</td><td><strong>Words and tokenization</strong></td><td>{% if page.day3_slides_url != "" %}<a class="course-tag course-tag--slides" href="{{ page.day3_slides_url }}" target="_blank" rel="noopener">W1D3</a>{% else %}<span class="course-tag course-tag--slides">W1D3</span>{% endif %} <a class="course-tag course-tag--reading" href="https://web.stanford.edu/~jurafsky/slp3/2.pdf" target="_blank" rel="noopener">SLP C2 (sections 2.1–2.4)</a></td><td>—</td></tr>

          <tr class="course-week-start"><td rowspan="3"><strong>2</strong><small>Language models</small></td><td>Mon., Aug. 31</td><td><strong>N-gram language models</strong></td><td>{% if page.w2_slides_url != "" %}<a class="course-tag course-tag--slides" href="{{ page.w2_slides_url }}" target="_blank" rel="noopener">W2 N-grams</a>{% else %}<span class="course-tag course-tag--slides">W2 N-grams</span>{% endif %} <a class="course-tag course-tag--reading" href="https://web.stanford.edu/~jurafsky/slp3/3.pdf" target="_blank" rel="noopener">SLP C3</a></td><td>—</td></tr>
          <tr><td>Wed., Sept. 2</td><td><strong>N-gram (cont) and LM evaluation</strong></td><td>{% if page.w2_slides_url != "" %}<a class="course-tag course-tag--slides" href="{{ page.w2_slides_url }}" target="_blank" rel="noopener">W2 N-grams</a>{% else %}<span class="course-tag course-tag--slides">W2 N-grams</span>{% endif %}</td><td>—</td></tr>
          <tr><td>Fri., Sept. 4</td><td><strong>Neural networks</strong></td><td>{% if page.w2d3_slides_url != "" %}<a class="course-tag course-tag--slides" href="{{ page.w2d3_slides_url }}" target="_blank" rel="noopener">W2D3</a>{% else %}<span class="course-tag course-tag--slides">W2D3</span>{% endif %} <a class="course-tag course-tag--reading" href="https://web.stanford.edu/~jurafsky/slp3/6.pdf" target="_blank" rel="noopener">SLP C6 (skip §6.4)</a></td><td>{% if page.pm1_description_url != "" %}<a href="{{ page.pm1_description_url }}" target="_blank" rel="noopener"><strong>Project proposal (PM1)</strong></a>{% else %}<strong>Project proposal (PM1)</strong>{% endif %}<small>Due Sept. 4</small></td></tr>

          <tr class="course-week-start"><td rowspan="3"><strong>3</strong><small>Neural sequence models</small></td><td>Mon., Sept. 7</td><td><strong>Recurrent neural networks (RNNs)</strong></td><td><a class="course-tag course-tag--reading" href="https://web.stanford.edu/~jurafsky/slp3/14.pdf" target="_blank" rel="noopener">SLP C14 (before §14.5)</a></td><td>—</td></tr>
          <tr><td>Wed., Sept. 9</td><td><strong>Long short-term memory networks (LSTMs)</strong></td><td><a class="course-tag course-tag--reading" href="https://web.stanford.edu/~jurafsky/slp3/14.pdf" target="_blank" rel="noopener">SLP C14 (§14.5 onward)</a></td><td>—</td></tr>
          <tr><td>Fri., Sept. 11</td><td><strong>Sequence labeling: POS tagging and NER</strong></td><td>—</td><td>—</td></tr>
          <tr class="course-week-start course-roadmap"><td>4</td><td>Sept. 14–18</td><td><strong>POS tagging and parsing</strong></td><td>—</td><td>{% if page.hw1_url != "" %}<a href="{{ page.hw1_url }}" target="_blank" rel="noopener"><strong>Homework 1</strong></a>{% else %}<strong>Homework 1</strong>{% endif %}</td></tr>
          <tr class="course-week-start course-roadmap"><td>5</td><td>Sept. 21–25</td><td><strong>Encoder–decoder models and attention</strong></td><td>—</td><td>—</td></tr>
          <tr class="course-week-start course-roadmap"><td>6</td><td>Sept. 28–Oct. 2</td><td><strong>Machine translation</strong></td><td>—</td><td><strong>Homework 2</strong></td></tr>
          <tr class="course-week-start course-roadmap"><td>7</td><td>Oct. 5–9</td><td><strong>Transformer language models</strong></td><td>—</td><td>—</td></tr>
          <tr class="course-week-start course-roadmap"><td>8</td><td>Oct. 12–16</td><td><strong>Mid-term project presentations</strong></td><td>—</td><td><strong>Baseline report &amp; presentation (PM2)</strong></td></tr>

          <tr class="course-break"><td>—</td><td>Oct. 17–25</td><td><strong>Mid-term break</strong></td><td>—</td><td>—</td></tr>

          <tr class="course-week-start course-roadmap"><td>9</td><td>Oct. 26–30</td><td><strong>Training large language models</strong></td><td>—</td><td><strong>Homework 3</strong></td></tr>
          <tr class="course-week-start course-roadmap"><td>10</td><td>Nov. 2–6</td><td><strong>LLM post-training</strong></td><td>—</td><td>—</td></tr>
          <tr class="course-week-start course-roadmap"><td>11</td><td>Nov. 9–13</td><td><strong>Applied semantics and retrieval</strong></td><td>—</td><td><strong>Homework 4</strong></td></tr>
          <tr class="course-week-start course-roadmap"><td>12</td><td>Nov. 16–20</td><td><strong>Evaluation and interpretability</strong></td><td>—</td><td>—</td></tr>
          <tr class="course-week-start course-roadmap"><td>13</td><td>Mon., Nov. 23</td><td><strong>Responsible NLP</strong></td><td>—</td><td><strong>Homework 5</strong></td></tr>

          <tr class="course-break"><td>—</td><td>Nov. 25–29</td><td><strong>Thanksgiving holiday</strong></td><td>—</td><td>—</td></tr>

          <tr class="course-week-start course-roadmap"><td>14</td><td>Nov. 30–Dec. 4</td><td><strong>Multilingual and low-resource NLP</strong></td><td>—</td><td>—</td></tr>
          <tr class="course-week-start"><td rowspan="3">15</td><td>Mon., Dec. 7</td><td><strong>Poster session</strong> - joint evening session with CSE60556 <em>Large Language Model</em>; pizza and beverages provided. The regular daytime class will be canceled; details TBA.</td><td>—</td><td><strong>Poster (PM3)</strong><small>Due Dec. 7</small></td></tr>
          <tr><td>Wed., Dec. 9</td><td><strong>Final report working session</strong></td><td>—</td><td>—</td></tr>
          <tr class="course-reading-day"><td>Thu., Dec. 10</td><td><strong>Reading days begin</strong></td><td>—</td><td>—</td></tr>

          <tr class="course-week-start course-roadmap"><td>16</td><td>Dec. 14–17</td><td><strong>Final exam week (No classes)</strong></td><td>—</td><td><strong>Final report (PM4)</strong><small>Due Dec. 14</small></td></tr>
        </tbody>
      </table>
    </div>

  </section>

  <section class="course-section">
    <div class="course-section-heading">
      <span>03</span>
      <div>
        <p>Assessment</p>
        <h2>Grading</h2>
      </div>
    </div>
    <p class="course-grading-note">Unless otherwise indicated, all assignments are due at <strong>11:59 p.m. Eastern Time</strong>.</p>
    <div class="course-cards">
      <div class="course-card">
        <strong>Participation</strong><span>30 points</span>
        <p>Regular attendance and active participation are expected. This includes contributing to class discussions and activities, responding to questions, and engaging with others respectfully. If you anticipate an absence, please notify the instructor in advance.</p>
      </div>
      <div class="course-card">
        <strong>Homework</strong><span>150 points</span>
        <p>Five homework assignments worth 30 points each combine conceptual questions with hands-on programming in Python and PyTorch. They are designed to reinforce the methods discussed in class.</p>
      </div>
      <div class="course-card">
        <strong>Course project</strong><span>120 points</span>
        <p>The semester-long project provides an opportunity to investigate an NLP problem in depth through four components: proposal (20 points), baseline report & presentation (30 points), poster presentation (30 points), and final report (40 points).</p>
      </div>
    </div>
    <div class="course-total"><span>Total</span><strong>300 points</strong></div>

    <div class="course-grade-scale">
      <h3>Letter-grade scale</h3>
      <div class="course-grade-table-wrap">
        <table class="course-grade-table">
          <thead><tr><th>Letter grade</th><th>Points</th><th>Letter grade</th><th>Points</th></tr></thead>
          <tbody>
            <tr><td>A</td><td>280–300</td><td>C+</td><td>230–239</td></tr>
            <tr><td>A−</td><td>270–279</td><td>C</td><td>220–229</td></tr>
            <tr><td>B+</td><td>260–269</td><td>C−</td><td>210–219</td></tr>
            <tr><td>B</td><td>250–259</td><td>D</td><td>180–209</td></tr>
            <tr><td>B−</td><td>240–249</td><td>F</td><td>0–179</td></tr>
          </tbody>
        </table>
      </div>
    </div>

  </section>

  <section class="course-section" id="policies">
    <div class="course-section-heading">
      <span>04</span>
      <div>
        <p>Expectations</p>
        <h2>Course policies</h2>
      </div>
    </div>
    <div class="course-policy-content">
      <article>
        <h3>Honor Code</h3>
        <p>Students in this course are expected to abide by the Academic Code of Honor Pledge: “As a member of the Notre Dame community, I will not participate in or tolerate academic dishonesty.”</p>
        <p>The following table summarizes how you may work with other students and use resources, including print and online sources and generative AI tools:</p>

        <div class="course-honor-table-wrap">
          <table class="course-honor-table">
            <thead>
              <tr><th></th><th>Resources</th><th>Solutions</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">Consulting</th><td class="course-allowed">Allowed</td><td class="course-not-allowed">Not Allowed</td></tr>
              <tr><th scope="row">Copying</th><td class="course-cite">Cite</td><td class="course-not-allowed">Not Allowed</td></tr>
            </tbody>
          </table>
        </div>

        <ul class="course-policy-list">
          <li><strong>Homework:</strong> Implement all assigned algorithms from scratch. Generative AI may be used for conceptual clarification, but it may not generate, complete, or reproduce assignment solutions or submitted code.</li>
          <li><strong>Course project:</strong> Generative AI may be used for data-processing scripts and debugging under <strong>Resources → Cite</strong>. Each PM1–PM4 submission must include an AI-use statement, even if no AI was used. Students remain responsible for, and must be prepared to explain and defend, all submitted code and writing.</li>
        </ul>

        <p>See the <a href="https://cse.nd.edu/undergraduate/cse-guide-to-the-honor-code/" target="_blank" rel="noopener">CSE Guide to the Honor Code</a> for definitions of the above terms.</p>
        <p>If an instructor sees behavior that is, in their judgement, academically dishonest, they are required to file either an Honor Code Violation Report or a formal report to the College of Engineering Honesty Committee.</p>
      </article>

      <article>
        <h3>Late Submission Policy &amp; 24-Hour Extensions</h3>
        <p>Deadlines help keep the course moving smoothly, but occasional delays happen. Late homework will be handled as follows:</p>
        <ul class="course-policy-list">
          <li><strong>12-hour grace period:</strong> Every homework assignment has an automatic 12-hour grace period after the posted deadline without penalty.</li>
          <li><strong>24-hour extensions:</strong> You have three 24-hour extensions to use across homework assignments during the semester. To use an extension, email the instructor before the grace period expires. The instructor will confirm the extension and your remaining balance. Multiple extensions may be used on one assignment.</li>
          <li><strong>Late penalty:</strong> After the grace period and any applied extensions expire, late work receives a 10% deduction for each additional 24-hour period or portion thereof.</li>
          <li><strong>Cutoff:</strong> Work will not be accepted more than three days after the adjusted deadline.</li>
        </ul>
        <p>Extensions apply only to homework, not to project milestones or presentations. University-approved absences are handled separately and do not use these extensions; notify the instructor by email as soon as possible.</p>
      </article>

      <div class="course-policy-grid">
        <article>
          <h3>Copyright</h3>
          <p>All course materials written by the instructor and published on this website are licensed under a <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">Creative Commons Attribution 4.0 International License</a>.</p>
          <p>All other course materials, including lecture recordings and materials written by the instructor and distributed privately, should not be redistributed in any way; doing so is a violation of both US copyright law and the University of Notre Dame Honor Code.</p>
        </article>

        <article>
          <h3>Accessibility and Accommodations</h3>
          <p>Any student who has a documented disability and is registered with Sara Bea Accessibility Services should speak with the professor as soon as possible regarding accommodations. Students who are not registered should contact the Sara Bea Accessibility Services as soon as possible since accommodation typically needs to be arranged well in advance.</p>
        </article>
      </div>

      <article>
        <h3>Student Mental Health &amp; Well-Being</h3>
        <p>Diminished mental health can interfere with optimal academic performance. The source of symptoms might be related to your course work; if so, please speak with me. However, problems with other parts of your life can also contribute to decreased academic performance. The University Counseling Center (UCC) provides cost-free and confidential mental health services to help you manage personal challenges that threaten your emotional or academic well-being.</p>
        <p>Remember, getting help is a smart and courageous thing to do — for yourself and for those who care about you. For more resources please see <a href="http://ucc.nd.edu">ucc.nd.edu</a> or <a href="http://studenthealth.nd.edu">studenthealth.nd.edu</a>.</p>
        <p>The UCC is located on the third floor of Saint Liam Hall. Phone: 574-631-7336. Hours: Monday-Friday 8:00 a.m. – 5:00 p.m. Urgent Crisis Line 24/7</p>
      </article>

      <article>
        <h3>Title IX &amp; Support Resources</h3>
        <p>The University of Notre Dame provides services for those who have been affected by sexual assault, sexual misconduct, dating or domestic violence, stalking and any conduct that creates a hostile environment. For help and further information including contact information for on and off-campus resources, please consult <a href="http://equity.nd.edu/resources">equity.nd.edu/resources</a>.</p>
      </article>
    </div>

  </section>

  <aside class="course-acknowledgment">
    <h2>Acknowledgment</h2>
    <p>This course adapts and builds upon lecture materials, curriculum design, textbooks, and assignments developed by  David Chiang, Aarohi Srivastava, as well as educational resources from Dan Jurafsky, James H. Martin, and the Stanford NLP Group.</p>
  </aside>
</div>
