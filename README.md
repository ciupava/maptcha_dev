# Template for setting up reproducible projects
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

*This is a template for setting up a research or data science project online, such as on GitHub.*

## About this Repository

This repository operationalises The Turing Way recommendations for structuring project repositories to support reproducibility in data science projects.
This repository includes files and directories recommended for enabling reproducibility and collaboration in a project, as well as sharing of research objects.

This repository follows the recommendations and guidance provided in *[The Turing Way](https://the-turing-way.netlify.app/welcome)* handbook to data science.
When reusing this repository, please update the information on your README page with information about your project.

### Using this Repository

![screenshot with arrows and instructions describing how to use this repository template to create a project repo. The description provided in the title.](./assets/use-this-repo.png)

**Image Description:**

Your streamlined project setup is just three steps away:
* Step 1: Click 'Use this template' on the top right-hand side. Follow it up by clicking 'Create a new repository.'
* Step 2: In the subsequent window, set the 'owner' (yourself or a GitHub organisation) and give your project repository a descriptive name.
* Step 3: Finalise by clicking 'Create repository' at the bottom right-hand side.

After creating your own copy of this repository, you can edit or delete existing files and folders, or add new ones as per your needs.

<!--If reusing this repository, delete this section -->
## About README

On an online repository, such as GitHub, the project overview page is named ‘README’ which is equivalent to the main page of a website.
README page should describe the project -- what is the purpose of the project, who is involved, how to collaborate and where to find key resources.

To learn more about how to create a README.md file, please read the [Landing Page - README File](https://the-turing-way.netlify.app/project-design/project-repo/project-repo-readme.html) chapter in The Turing Way Guide for Project Design.

When reusing, you can delete most content written here, and use this MarkDown template to add content about your project:

```
# Project Quick Start

*Add Badges/GitHub shields, which are clickable buttons that provide concise actions related to the project.*

*A sentence summarising what to expect from this repository*  

## Vision and Mission

- **Vision:** One sentence capturing the project's overarching vision.
- **Mission:** One sentence defining the project's goals and target audience.

## About

Motivation and background in a nutshell.

## Roadmap & Milestones

- **Goals:** Clear overview of overarching and short-term goals.
- **Outcomes:** Description of expected results and deliverables.

## The Team

- **Members:** List of team members.
- **Roles & Collaboration:** [Team Directory](link-to-directory) outlines roles, responsibilities, and collaboration opportunities.

## Contributing

- **Guidelines:** [Contribution Guidelines](link-to-guidelines) for contributors.
- **Code of Conduct:** [Code of Conduct](link-to-coc) ensures a respectful project environment.
- **Resource Plans:** Details on available resources and recommended practices for the project team.

## Citing & Acknowledgement

- **Citation Instructions:** How to cite the project.
- **Acknowledgment:** Recognising contributions by different members.

## Contact

- **Reach Out:** Contact details for questions, feedback, or ideas.

```


<!--If reusing this repository, delete this section -->

## Repo Structure

Inspired by [Cookie Cutter Data Science](https://github.com/drivendata/cookiecutter-data-science).

```
├── LICENSE
├── README.md          <- The top-level README for users of this project.
├── CODE_OF_CONDUCT.md <- Guidelines for users and contributors of the project.
├── CONTRIBUTING.md    <- Information on how to contribute to the project.
├── data
│   ├── processed      <- The final, canonical data sets for modeling.
│   └── raw            <- The original, immutable data dump.
│
├── docs               <- A default Sphinx project; see sphinx-doc.org for details
│
├── models             <- Trained and serialized models, model predictions, or model summaries
│
├── notebooks          <- Jupyter notebooks. The naming convention is a number (for ordering),
│                         the creator's initials, and a short `-` delimited description, e.g.
│                         `1.0-jqp-initial-data-exploration`.
│
├── reports            <- Generated analysis as HTML, PDF, LaTeX, etc.
│   └── figures        <- Generated graphics and figures to be used in reporting
│
├── project_management <- Meeting notes and other project planning resources
│
├── src                <- Source code for use in this project.
│   │
│   ├── data           <- Scripts to download or generate data
│   │   └── make_dataset.py
│   │
│   ├── models         <- Scripts to train models and then use trained models to make
│   │   │                 predictions
│   │   ├── predict_model.py
│   │   └── train_model.py
│   │
│   └── visualisation  <- Scripts to create exploratory and results-oriented visualisations
│       └── visualise.py
└──
```

**Maintainers**

This repository has been set up and maintained by Malvika Sharan to support the work of Open Research Community Management and Research Application Management teams under the Tools, Practices and Systems Research Programme at The Alan Turing Institute.

As an open source repository, anyone beyond these teams is very welcome to reuse this template for setting up their projects.

*Please create [an issue](../../issues) to share references or ideas related to the development of this project.*

🎯 Roadmap
---

### Checklist for setting an online repository 

- [ ] Add a README file
- [ ] Add a [CONTRIBUTING](CONTRIBUTING.md) file
- [ ] Add a [LICENSE](LICENSE.md)
- [ ] Add a [Code of Conduct](CODE_OF_CONDUCT.md)
- [ ] Install [all-contributors](https://allcontributors.org/) bot
- [ ] .gitignore file (choose from a template)
- [ ] Issue templates
    - [ ] Optionally Install [Welcome/behavior](https://github.com/behaviorbot/welcome) bot (see The Turing Way [config](https://github.com/alan-turing-institute/the-turing-way/blob/main/.github/config.yml))
- [ ] Create a directory with files for project management (meetings, reports, proposals)
- [ ] Create a directory with files for communications
- [ ] Create a directory for research analysis
- [ ] Create a directory for research results/outcomes to share (?)
- [ ] Create a directory for ethics approval and project policies
- [ ] Create a directory with files for stakeholders' info and the nature of engagement
- [ ] Connect repo with Zenodo
- [ ] Add cff file for citation
- [ ] Add badges

📫 Contact
---

For any organisation-related queries or concerns, you can directly reach out to Malvika Sharan by emailing [msharan@turing.ac.uk](mailto:msharan@turing.ac.uk).

♻️ License
---

This work is licensed under the MIT license (code) and Creative Commons Attribution 4.0 International license (for documentation).
You are free to share and adapt the material for any purpose, even commercially,
as long as you provide attribution (give appropriate credit, provide a link to the license,
and indicate if changes were made) in any reasonable manner, but not in any way that suggests the
licensor endorses you or your use and with no additional restrictions.

🤝 Acknowledgement
---

This repository has been created for anyone to reuse -- please attribute us as:
> This repository uses the template created and maintained by *The Turing Way* team members and shared under CC-BY 4.0 for reuse: https://github.com/alan-turing-institute/reproducible-project-template.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="http://malvikasharan.github.io/"><img src="https://avatars.githubusercontent.com/u/5370471?v=4?s=100" width="100px;" alt="Malvika Sharan"/><br /><sub><b>Malvika Sharan</b></sub></a><br /><a href="#ideas-malvikasharan" title="Ideas, Planning, & Feedback">🤔</a> <a href="#content-malvikasharan" title="Content">🖋</a></td>
      <td align="center"><a href="https://github.com/EKaroune"><img src="https://avatars.githubusercontent.com/u/58147174?v=4?s=100" width="100px;" alt="Emma Karoune"/><br /><sub><b>Emma Karoune</b></sub></a><br /><a href="#ideas-EKaroune" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/alan-turing-institute/reproducible-project-template/commits?author=EKaroune" title="Documentation">📖</a></td>
      <td align="center"><a href="http://www.aleesteele.com"><img src="https://avatars.githubusercontent.com/u/18509789?v=4?s=100" width="100px;" alt="Anne Lee Steele"/><br /><sub><b>Anne Lee Steele</b></sub></a><br /><a href="#ideas-aleesteele" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/alan-turing-institute/reproducible-project-template/commits?author=aleesteele" title="Documentation">📖</a></td>
      <td align="center"><a href="https://github.com/vhellon"><img src="https://avatars.githubusercontent.com/u/93144591?v=4?s=100" width="100px;" alt="Vicky Hellon"/><br /><sub><b>Vicky Hellon</b></sub></a><br /><a href="#ideas-vhellon" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/alan-turing-institute/reproducible-project-template/commits?author=vhellon" title="Documentation">📖</a></td>
      <td align="center"><a href="http://jending.com"><img src="https://avatars.githubusercontent.com/u/5104098?v=4?s=100" width="100px;" alt="Jennifer Ding"/><br /><sub><b>Jennifer Ding</b></sub></a><br /><a href="#content-dingaaling" title="Content">🖋</a> <a href="https://github.com/alan-turing-institute/reproducible-project-template/commits?author=dingaaling" title="Documentation">📖</a> <a href="#ideas-dingaaling" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center"><a href="http://lappland.io"><img src="https://avatars.githubusercontent.com/u/51458?v=4?s=100" width="100px;" alt="Hilmar Lapp"/><br /><sub><b>Hilmar Lapp</b></sub></a><br /><a href="https://github.com/alan-turing-institute/reproducible-project-template/issues?q=author%3Ahlapp" title="Bug reports">🐛</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
