# UNICEF :: Documentation 🤘🏻

<a title="FOSSA" href="https://app.fossa.com/projects/git%2Bgithub.com%2Fgeospoc%2Func-sch-documentation?ref=badge_shield" target="_blank" rel="nofollow">
  <img alt="FOSSA Status" src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fgeospoc%2Func-sch-documentation.svg?type=shield" />
</a>
<a title="CI" href="https://github.com/geospoc/unc-sch-documentation/actions/workflows/ci.yml" target="_blank" rel="nofollow">
  <img alt="CI status" src="https://github.com/geospoc/unc-sch-documentation/actions/workflows/ci.yml/badge.svg" />
</a>
<a title="Deployment status" href="https://github.com/geospoc/unc-sch-documentation/actions/workflows/deploy-gh.yml" target="_blank" rel="nofollow">
  <img alt="Deployment status" src="https://github.com/geospoc/unc-sch-documentation/actions/workflows/deploy-gh.yml/badge.svg" />
</a>
<a title="dependabot" href="https://github.com/geospoc/unc-sch-documentation/network/updates" target="_blank" rel="nofollow">
  <img alt="Dependabot" src="https://img.shields.io/badge/dependabot-enabled-brightgreen?logo=dependabot" />
</a>
<a title="deploy" href="https://github.com/algolia/shipjs" target="_blank" rel="nofollow">
  <img alt="deployed using ship.js" src="https://img.shields.io/badge/deploy-🛳%20Ship.js-blue?style=flat" />
</a>

## Build Setup 🚨

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project
$ npm run build
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Release Process 🏗

- Once the PR is merged from your `feat/add-web-worker-JIRA-123` -> `main`, run `npm run release` & ship.js will trigger a build with updated [CHANGELOG](./CHANGELOG.md) & proper [git tags](https://github.com/geospoc/unc-sch-documentation/tags)
- Follow the guide from the automated PR from Ship.js
- Once you **Squash & Merge** the automated PR, wait for the [Ship.js trigger](https://github.com/geospoc/unc-sch-documentation/actions/workflows/shipjs-trigger.yml) workflow to run successfully.

## Branching Strategy 🎋

- Create your feature branch from `main` branch, eg. `feat/add-web-worker-JIRA-123`
- Create a new PR from `feat/add-web-worker-JIRA-123` to `main`
- Once code review passes, merge the code on `main`
- Checkout on `main` & then run a new ship.js release workflow by running `npm run release` (Ensure you have a valid GitHub PAT in .env [GITHUB_TOKEN=PAT])
- Ship.js will automatically update the [CHANGELOG](./CHANGELOG.md) & once you review and **Sqaush Merge** the PR

## Deployment 🎉

Deployment for the docs is done via GitHub pages via GitHub Actions workflow – [deploy-gh.yml](./.github/workflows/deploy-gh.yml)

## Time logging ⏳

Since we'll be using Jira to log time, we have to follow the [Smart Commits](https://support.atlassian.com/jira-software-cloud/docs/process-issues-with-smart-commits/) to ensure the time is correctly logged against each ticket. For that, you have to follow some steps.

Once you've cloned the repository, there are few steps before you can start using the Smart Commits syntax

```sh
$ cd unc-sch-documentation
$ git config --local --add user.email <your-geospoc-email-address>
```

Next, create a bug-fix/feature branch from `origin/dev` (or the default branch).

```sh
$ git fetch --all
$ git checkout -b feat/add-web-worker-JIRA-123 origin/dev
# Branch 'feat/add-web-worker-JIRA-123' set up to track remote branch 'dev' from 'origin'.
# Switched to a new branch 'feat/add-web-worker-JIRA-123'
```

Next, once you've done the changes, perform a Smart Commit

```sh
$ git add .
$ git commit -m 'feat: integrate web worker JIRA-123 #time 2h'
$ git push
```

Done. Now goto Jira board, and check for the Time Tracking section on the Jira ticket `JIRA-123`

> Note: Each commit should have the **Jira ticket & time** associated with it.

## Contributing ✍🏻

_Note_: Commits & PRs will be allowed only if the commit messages & PR titles follow a [conventional commits standard](https://www.conventionalcommits.org/en/v1.0.0), read more about it [here](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum)

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a new branch from the default branch, add commits, and [open a pull request](https://github.com/geospoc/unc-sch-documentation/compare)

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fgeospoc%2Func-sch-documentation.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fgeospoc%2Func-sch-documentation?ref=badge_large)
