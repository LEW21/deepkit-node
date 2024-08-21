# deepkit-node
`ts-node` with explicit support for [Deepkit Runtime Types](https://deepkit.io/library/type).

Works with ES Modules and both [Yarn PnP](https://yarnpkg.com/features/pnp) and `node_modules`.

```sh
yarn add -D deepkit-node typescript
yarn node --import deepkit-node ./example.ts
```

Note - your `package.json` has to set `"type": "module"`.
