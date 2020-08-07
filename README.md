# Reaact Shipper

## Install

### System Dependencies

- install [homebrew](http://brew.sh/) or the Windows equivalent
- nvm: `brew install nvm`
- Node >v10.16.2:
  - `nvm install 10.16.2`
  - & then `nvm use 10.16.2` when working on the project (see below about shell aliases and nvm defaults)
- yarn: `brew install yarn --ignore-dependencies`
  - (Installing yarn will by-default install an extra copy of node in the homebrew context, unless you use `--ignore-dependencies`.)
- Install .eslintrc & .prettierrc support for your editor
  - this is an essential requirement to avoid stupid merge conflicts

### Project Dependencies

- `git clone` this repo
- `cd` into the cloned repo
- install node dependencies with `yarn` (short for `yarn install`)

## Usage

### Running the web app

For Web the following commands should create a bundle where the corresponding .env.[environment] file will be taken into consideration:

```bash
yarn start
```

For build version, run this command:

```bash
yarn build
```

### Running the unit test

For Unit Test the following commands should trigger unit testing:

```bash
yarn test
yarn test:coverage => trigger unit test coverage
yarn test:view => trigger unit test coverage & open lcov report
```
