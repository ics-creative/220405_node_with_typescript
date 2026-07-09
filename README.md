# TypeScriptで始めるNode.js入門

Node.jsとTypeScriptを連携させるデモです。

詳しくはICS MEDIAの記事を御覧ください。

- [TypeScriptで始めるNode\.js入門 \- ICS MEDIA](https://ics.media/entry/4682/)

## TypeScript 7対応について

このリポジトリでは、`tsc` に TypeScript 7 を使います。

`example-nodejs`、`example-tsx` は TypeScript 7 を利用します。

`example-ts-node` は `ts-node` が TypeScript 7.0の compiler API に未対応のため、`typescript` 依存は TypeScript 6を使います。`npm run typecheck` は `@typescript/native` の TypeScript 7で実行されます。
