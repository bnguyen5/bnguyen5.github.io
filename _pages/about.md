---
permalink: /
title: "Bang Nguyen (Bàng Nguyễn)"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

Hello! I'm Bang, a third-year Ph.D. student (2022-now) in the Computer Science and Engineering department at the University of Notre Dame. I'm fortunate to be a member of the _Data Mining towards Decision Making_ (DM2) Lab, where I am advised by [Dr. Meng Jiang](http://www.meng-jiang.com/)

Prior to my Ph.D., I obtained my Bachelor's Degree from The College of Wooster in 2022 with a major in Computer Science and a double minor in Data Science and Communication Studies.

With a strong interest in Natural Language Processing (NLP) and Machine Learning, my research focuses on simulation-based evaluation of NLP applications. I am currently exploring how simulated classroom learning can facilitate the generation and evaluation of AI tutors. My work aims to improve how AI systems can align with human behaviors and values, ensuring that they support users in achieving their goals in a responsible, efficient, and impactful way.

# What's new

<table style="width:100%; border: none; border-spacing: 0; border-collapse: collapse;">
  <tr style="background-color: #ffffff;">
    <td style="padding: 2px;">Feb 2025</td>
    <td style="padding: 2px;">Check out our latest paper: <a href="https://arxiv.org/abs/2503.05888" target="_blank">QG-SMS: Enhancing Test Item Analysis via Student Modeling and Simulation</a>
</td>
  </tr>
  <tr style="background-color: #f9f9f9;">
    <td style="padding: 2px;">Sep 2024</td>
    <td style="padding: 2px;">Our paper <a href="https://arxiv.org/abs/2403.12242" target="_blank">Reference-based Metrics Disprove Themselves in Question Generation</a> has been accepted to EMNLP 2024 Findings. See you in Miami!</td>
  </tr>
</table>

# Getting started

1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Fork [this template](https://github.com/academicpages/academicpages.github.io) by clicking the "Use this template" button in the top right.
1. Go to the repository's settings (rightmost item in the tabs that start with "Code", should be below "Unwatch"). Rename the repository "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and create content & metadata (see below -- also see [this set of diffs](http://archive.is/3TPas) showing what files were changed to set up [an example site](https://getorg-testacct.github.io) for a user with the username "getorg-testacct")
1. Upload any files (like PDFs, .zip files, etc.) to the files/ directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.
1. Check status by going to the repository settings, in the "GitHub pages" section

## Site-wide configuration

The main configuration file for the site is in the base directory in [\_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [\_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header.

## Create content & metadata

For site content, there is one markdown file for each type of content, which are stored in directories like \_publications, \_talks, \_posts, \_teaching, or \_pages. For example, each talk is a markdown file in the [\_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the \_talks directory).

**Markdown generator**

The repository includes [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the Academic Pages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.

## How to edit your site's GitHub repository

Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons.

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png)

## For more info

More info about configuring Academic Pages can be found in [the guide](https://academicpages.github.io/markdown/), the [growing wiki](https://github.com/academicpages/academicpages.github.io/wiki), and you can always [ask a question on GitHub](https://github.com/academicpages/academicpages.github.io/discussions). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful.
