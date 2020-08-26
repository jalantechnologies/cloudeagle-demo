# CloudEagle Demo

## Development server

Run `npm run serve` for a dev server. Navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Configuration

The module uses [config](https://www.npmjs.com/package/config) for loading configuration entries.

In the `config` directory:

- Consult/update `custom-environment-variables.json` for loading values via environment. This overrides any value set in files defined below.
- Create `local.json` for local config.
- Consult/update `development.json` for values at development. (The default env)
- Consult/update `testing.json` for values at testing. `NODE_CONFIG_ENV` must be set to `testing` for this.
- Consult/update `staging.json` for values at staging. `NODE_CONFIG_ENV` must be set to `staging` for this.
- Consult/update `production.json` for values at production. `NODE_CONFIG_ENV` must be set to `production` for this.
- Consult/update `default.json` for **constant values only**.

**INFO:** `local*` files allows you to manually provide config during development and are set not to be tracked by VCS. Any environment can be overridden locally via `local-{env}.json`.

**INFO:** Read more about in what order the config entries are loaded [here](https://github.com/lorenwest/node-config/wiki/Configuration-Files#file-load-order).

## Linting

Added Linting using eslint
Run `npm run lint` to run linting

## Features

- Complete codebase is using React Hooks
- TypeScript support, Webpack 4
- Continuous Integration using CircleCI
- Heroku deployment-ready (see `app.json` and `Procfile`)
