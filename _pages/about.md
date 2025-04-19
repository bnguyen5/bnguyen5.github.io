---
permalink: /
title: "Bang Nguyen (Nguyễn Văn Bàng)"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

Hello! I'm Bang, a third-year Ph.D. student (2022-now) in the Computer Science and Engineering department at the University of Notre Dame. I'm fortunate to be a member of the _Data Mining towards Decision Making_ (DM2) Lab, where I am advised by [Dr. Meng Jiang](http://www.meng-jiang.com/).

I obtained my Bachelor's Degree from The College of Wooster in 2022 with a major in Computer Science and a double minor in Data Science and Communication Studies.

With a strong interest in Natural Language Processing (NLP) and Machine Learning, my research focuses on simulation-based evaluation of NLP applications. I am currently exploring how simulated classroom learning can facilitate the development and evaluation of AI tutors. My work aims to improve how AI systems can align with human behaviors and values, ensuring that they support users in achieving their goals in a responsible, efficient, and impactful way.

# What's new

<table style="width:100%; border-collapse: separate; border-spacing: 0 6px; border: none; font: inherit;">
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
