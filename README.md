# 概要

vuexをtypescriptでスムーズに使用できるようにvuex-module-decoratorsを導入するサンプル

# DEMO

https://gibo-smc.github.io/vuex_ts/

# package.json

使用モジュールについて

### webpack関連

- webpack
    - コアモジュール
- webpack-cli
    - webpackコマンド
- webpack-dev-server
    - ローカルサーバー
- @types/webpack-env
    - 型定義
- @types/webpack
    - 型定義

### Typescript関連

- typescript
    - Typescript本体
- ts-loader
    - webpackでTypescriptを読み込む
- fork-ts-checker-webpack-plugin
    - ts-loaderではコンパイルのみを実行し型チェックは別途並列で実行
- tslint
    - 型チェックを実行

### vue.js関連

- vue
    - コアモジュール
- vue-loader
    - webpackで`.vue`ファイルを読み込む
- vue-template-compiler
    - templateタグ内の記述をrender関数にコンパイルする

### vuex関連

- vuex
    - コアモジュール
- vuex-module-decorators
    - このリポジトリで検証するパッケージ
