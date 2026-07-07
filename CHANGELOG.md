<a name="2.1.0"></a>
## [2.1.0](https://github.com/gene891212/kuroshiro-enhance/compare/v2.0.0...v2.1.0) (2026-07-07)

### Feature

* Add `furigana_segments` mode returning a flat `FuriganaSegment[]` (`{ text, ruby? }`) that renders without index bookkeeping and emits newlines as their own segments
* Rename the `kanaToHiragana` util (it was previously misspelled `kanaToHiragna`)

### Deprecations

* `furigana_map` mode is deprecated in favor of `furigana_segments`; it still works and logs a one-time warning per instance, and will be removed in the next major version
* `Kuroshiro.Util.kanaToHiragna` is kept as a deprecated alias of `kanaToHiragana` and will be removed in the next major version

### Bug Fixes

* Fix the package entry points: `main`/`module`/`exports` now match the actual build output (`index.js` for CommonJS, `index.mjs` for ESM). Previously `require()` resolved to a nonexistent `index.cjs` and `import` loaded the CommonJS file
* Correct `キェ` romaji to `kye` in the nippon and hepburn systems
* Escape regex metacharacters when building reading-match patterns, so surface forms containing characters like `(` `.` `*` no longer throw or mismatch
* `patchTokens` no longer mutates the caller's token array

### CI

* Add a CI workflow running typecheck, lint, test and build on Node 18 and 20
* Migrate husky to the v8 `.husky/` layout and drop the unused `@babel/runtime` and `coveralls` dependencies

### Documents

* Document `furigana_segments` and the `furigana_map` deprecation in the README

<a name="2.0.0"></a>
## [2.0.0](https://github.com/gene891212/kuroshiro-enhance/compare/v1.4.1...v2.0.0) (2026-03-14)

### BREAKING CHANGE

* Require Node.js >= 18.0.0
* Modernize the build output around ESM/CommonJS exports; CommonJS consumers should use `require("kuroshiro-enhance").default`

### Feature

* Migrate the codebase to TypeScript and bundle type definitions
* Replace the legacy build and test toolchain with `tsup` and `vitest`

### Documents

* Update README examples and document `furigana_map`

### Test

* Add tests for `furigana_map`

### CI

* Update publish workflow checks for pnpm

<a name="1.4.1"></a>
## [1.4.1](https://github.com/gene891212/kuroshiro-enhance/compare/v1.4.0...v1.4.1) (2025-11-01)

### Bug Fixes

* Support both CommonJS and ES Module imports without requiring `.default`

<a name="1.4.0"></a>
## [1.4.0](https://github.com/gene891212/kuroshiro-enhance/compare/v1.3.3...v1.4.0) (2025-10-25)

### Feature

* Add `furigana_map` mode for structured ruby span output
* Improve the GitHub Pages demo UI

### Bug Fixes

* Render non-Japanese characters correctly in ruby output
* Update furigana romaji output to use individual ruby tags

### Demo

* Improve loading, result display, copy button, Japanese font support, and clipboard behavior

<a name="1.3.3"></a>
## [1.3.3](https://github.com/gene891212/kuroshiro-enhance/compare/v1.3.2...v1.3.3) (2025-07-15)

### CI

* Update publish workflow to use pnpm for dependency management and publishing

<a name="1.3.2"></a>
## [1.3.2](https://github.com/gene891212/kuroshiro-enhance/compare/v1.3.1...v1.3.2) (2025-07-15)

### Documents

* Update README examples for `includeKatakana`

### Demo

* Add GitHub Pages demo

### CI

* Add npm auto-publish workflow

<a name="1.3.1"></a>
## [1.3.1](https://github.com/gene891212/kuroshiro-enhance/releases/tag/v1.3.1) (2024-09-01)

### Miscellaneous

* Rename package and repository metadata for `kuroshiro-enhance`

<a name="1.2.0"></a>
## [1.2.0](https://github.com/hexenq/kuroshiro/compare/1.1.2...1.2.0) (2021-6-7)

### Bug Fixes

* fix errors occurring when converting っ to romaji ([#61](https://github.com/hexenq/kuroshiro/issues/61))
* fix wrong regex pattern ([#60](https://github.com/hexenq/kuroshiro/issues/60))

### Dependencies

* Upgrade to babel 7
* Update other dependencies

### Documents

* Add ready to use code in readme
* Add Esperanto docs

### Miscellaneous

* Add husky and lint-staged for pre-commit check

<a name="1.1.2"></a>
## [1.1.2](https://github.com/hexenq/kuroshiro/compare/1.1.1...1.1.2) (2018-10-19)

### Bug Fixes

* fix conversion bug when handling chōon with passport-shiki romanization ([#47](https://github.com/hexenq/kuroshiro/issues/47))
* fix kanji->romaji conversion bug when using nippon-shiki/hepburn-shiki romanization ([#46](https://github.com/hexenq/kuroshiro/issues/46))

### Test

* Update test specification

### Miscellaneous

* Update docs, add notice for romaji conversion

<a name="1.1.1"></a>
## [1.1.1](https://github.com/hexenq/kuroshiro/compare/1.1.0...1.1.1) (2018-08-28)

### Bug Fixes

* Handle invalid parameter when initializing kuroshiro

### Test

* Update test specification

<a name="1.1.0"></a>
## [1.1.0](https://github.com/hexenq/kuroshiro/compare/1.0.0...1.1.0) (2018-08-13)

### Feature

* Add support for multiple romanization systems

### Bug Fixes

* Add `babel-runtime` dependency which used by commonjs distribution

### Test

* Update test specification

### Miscellaneous

* Update docs

<a name="1.0.0"></a>
## [1.0.0](https://github.com/hexenq/kuroshiro/compare/1.0.0-rc.2...1.0.0) (2018-08-07)

### Bump deps

* Update `kuroshiro-analyzer-kuromoji` to version ^1.1.0

### Miscellaneous

* Update docs

<a name="1.0.0-rc.2"></a>
## [1.0.0-rc.2](https://github.com/hexenq/kuroshiro/compare/1.0.0-rc.1...1.0.0-rc.2) (2018-08-05)

### Miscellaneous

* Update docs

<a name="1.0.0-rc.1"></a>
## [1.0.0-rc.1](https://github.com/hexenq/kuroshiro/compare/0.2.4...1.0.0-rc.1) (2018-07-26)

### BREAKING CHANGE 

* Seperate morphological analyzer from phonetic notation logic to enable the new feature listed below
* Embrace ES8/ES2017 to use async/await functions
* Use ES6 Module instead of CommonJS
* Refactor project structure

### Feature

* Ability to use different morphological analyzers (ready-made or customized)

### Repo Name Change

* `kuroshiro.js` is renamed `kuroshiro` for avoiding confusion between the names of kuroshiro and its plugins.

### Miscellaneous

* Add CONTRIBUTING.md
* Add README.jp.md
* Update documents

<a name="0.2.4"></a>
## [0.2.4](https://github.com/hexenq/kuroshiro/compare/0.2.3...0.2.4) (2018-05-23)

### Bug Fixes

* Fix misparing when kana is between kanji ([#31](https://github.com/hexenq/kuroshiro/issues/31))

<a name="0.2.3"></a>
## [0.2.3](https://github.com/hexenq/kuroshiro/compare/0.2.2...0.2.3) (2018-05-17)

### Miscellaneous

* Update .npmignore file

<a name="0.2.2"></a>
## [0.2.2](https://github.com/hexenq/kuroshiro/compare/0.2.1...0.2.2) (2018-05-17)

### Bug Fixes

* Fix simple character conversion problem ([#28](https://github.com/hexenq/kuroshiro/issues/28))

<a name="0.2.1"></a>
## [0.2.1](https://github.com/hexenq/kuroshiro/compare/0.2.0...0.2.1) (2018-01-24)

### Miscellaneous

* Fix coverage report problem

<a name="0.2.0"></a>
## [0.2.0](https://github.com/hexenq/kuroshiro/compare/0.1.5...0.2.0) (2018-01-24)

### Bug Fixes

* Fix it would replace from first 'src' when getting full path of 'kuromoji/dict' ([#19](https://github.com/hexenq/kuroshiro/pull/19))

### Usability

* Add typescript typings ([#21](https://github.com/hexenq/kuroshiro/pull/21))

### Bump deps

* Update dependencies

### Miscellaneous

* Add README.zh-tw.md
* Modify distribution logic
* Other trivial modifications

<a name="0.1.5"></a>
## [0.1.5](https://github.com/hexenq/kuroshiro/compare/0.1.4...0.1.5) (2017-06-05)

### Bug Fixes

* Fix wrong pairing of kanji and phonetic notation (reported in [#10](https://github.com/hexenq/kuroshiro/issues/10))

<a name="0.1.4"></a>
## [0.1.4](https://github.com/hexenq/kuroshiro/compare/0.1.3...0.1.4) (2017-05-25)

### Bug Fixes

* Fix wrong recognition when encountering katakana-kanji-mixed tokens ([#9](https://github.com/hexenq/kuroshiro/issues/9))

<a name="0.1.3"></a>
## [0.1.3](https://github.com/hexenq/kuroshiro/compare/0.1.2...0.1.3) (2017-01-10)

### Usability

* Make param `callback` of `init` function *optional*

<a name="0.1.2"></a>
## [0.1.2](https://github.com/hexenq/kuroshiro/compare/0.1.1...0.1.2) (2016-08-22)

### Bump deps

* Update dependencies in package.json

### Miscellaneous

* Update README.md and README.zh-cn.md
