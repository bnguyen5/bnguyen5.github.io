---
permalink: /
title: "Welcome"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

# About me

Hello! I'm Bang, a Ph.D. candidate (2022-now) in the Computer Science and Engineering department at the University of Notre Dame. I'm fortunate to be a member of the _Data Mining towards Decision Making_ (DM2) Lab, where I am advised by [Dr. Meng Jiang](http://www.meng-jiang.com/).

I obtained my Bachelor's Degree from The College of Wooster in 2022 with a major in Computer Science and a double minor in Data Science and Communication Studies.

With a strong interest in Natural Language Processing (NLP) and Machine Learning, my research integrates the development of effective AI applications with realistic, end-to-end evaluation. I am exploring use-case-driven approaches where insights from simulated user interactions and targeted benchmarks directly inform the model development and refinement process. This tight feedback loop between building and testing ensures the development of more reliable, efficient, and aligned AI systems.

# What's new

<table style="width:100%; border-collapse: separate; border-spacing: 0 6px; border: none; font: inherit;">
 <tr style="background-color: #ffffff;">
    <td style="padding: 2px; border: none;"><strong>Nov 2025</strong></td>
    <td style="padding: 2px; border: none;">Passed my oral candidacy exam. I am now a PhD candidate!
    </td>
  </tr>
  <tr style="background-color: #f9f9f9;">
    <td style="padding: 2px; border: none;"><strong>May 2025</strong></td>
    <td style="padding: 2px; border: none;">Our paper <a href="https://arxiv.org/abs/2503.05888" target="_blank">QG-SMS: Enhancing Test Item Analysis via Student Modeling and Simulation</a> has been accepted to ACL 2025 Main!
    </td>
  </tr>
  <tr style="background-color: #ffffff;">
    <td style="padding: 2px; border: none;"><strong>Mar 2025</strong></td>
    <td style="padding: 2px; border: none;">DM2 is organizing <a href="https://nlp.nd.edu/msld25/" target="_blank">Midwest Speech and Language Days (MSLD) 2025</a>. See you in Notre Dame!
    </td>
  </tr>
  <tr style="background-color: #f9f9f9;">
    <td style="padding: 2px; border: none;"><strong>Feb 2025</strong></td>
    <td style="padding: 2px; border: none;">Check out our latest paper: <a href="https://arxiv.org/abs/2503.05888" target="_blank">QG-SMS: Enhancing Test Item Analysis via Student Modeling and Simulation</a>
    </td>
  </tr>
  <tr style="background-color: #ffffff;">
    <td style="padding: 2px; border: none;"><strong>Sep 2024</strong></td>
    <td style="padding: 2px; border: none;">Our paper <a href="https://arxiv.org/abs/2403.12242" target="_blank">Reference-based Metrics Disprove Themselves in Question Generation</a> has been accepted to EMNLP 2024 Findings. See you in Miami!</td>
  </tr>
</table>

# Publications

{% assign pubs = site.publications | sort: 'date' | reverse %}
{% for pub in pubs %}
{% include publication-card.html pub=pub %}
{% endfor %}
