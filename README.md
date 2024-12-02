# About
`.env` file in the root should contain ALL environment variables for the project.
`packages/env` should export a type-safe object including all server and client environment variables.
`apps/*` should be able to add `@repo/env` as a dependency and use the exported type-safe `env` object.
