![kuroshiro](https://kuroshiro.org/kuroshiro.png)

# kuroshiro-enhance

[![npm version](https://img.shields.io/npm/v/kuroshiro-enhance.svg)](https://www.npmjs.com/package/kuroshiro-enhance)
[![License](https://img.shields.io/github/license/lassjs/lass.svg)](LICENSE)

kuroshiro is a Japanese language library for converting Japanese sentence to Hiragana, Katakana or Romaji with furigana and okurigana modes supported.

kuroshiro-enhance is a fork of the original kuroshiro, a Japanese language library for converting Japanese sentences to Hiragana, Katakana, or Romaji with furigana and okurigana modes supported.

## What's New in kuroshiro-enhance?

In this enhanced version, we've added powerful new features to the `convert(str, [options])` API, providing more control and flexibility when working with Japanese text conversion.

### New Features Overview:

- **includeKatakana**: A boolean option that lets you control the inclusion of Katakana in Furigana mode. (Default: false)
- **furigana_map mode**: A new conversion mode that returns a structured object with text and ruby annotation positions, perfect for programmatic processing and custom rendering.

#### Example Usage:

**Input text:**

古びたテディベア

**With `includeKatakana: false` (Default):**

<ruby>古<rp>(</rp><rt>ふる</rt><rp>)</rp></ruby>びたテディベア

**With `includeKatakana: true`:**

<ruby>古<rp>(</rp><rt>ふる</rt><rp>)</rp></ruby>びた<ruby>テ<rp>(</rp><rt>て</rt><rp>)</rp></ruby><ruby>デ<rp>(</rp><rt>で</rt><rp>)</rp></ruby><ruby>ィ<rp>(</rp><rt>ぃ</rt><rp>)</rp></ruby><ruby>ベ<rp>(</rp><rt>べ</rt><rp>)</rp></ruby><ruby>ア<rp>(</rp><rt>あ</rt><rp>)</rp></ruby>

As you can see, when `includeKatakana` is set to `true`, katakana characters like "テディベア" also get furigana annotations, showing their hiragana readings. When set to `false` (default), katakana characters are left as-is without furigana.

### New Mode: furigana_map

The new `furigana_map` mode returns a structured JSON object instead of HTML, making it easier to process and render ruby annotations programmatically.

**Input text:**

古びたテディベア

**With `mode: "furigana_map"` and `includeKatakana: true`:**

```json
{
  "text": "古びたテディベア",
  "ruby": [
    { "s": 0, "e": 1, "rt": "ふる" },
    { "s": 3, "e": 4, "rt": "て" },
    { "s": 4, "e": 5, "rt": "で" },
    { "s": 5, "e": 6, "rt": "ぃ" },
    { "s": 6, "e": 7, "rt": "べ" },
    { "s": 7, "e": 8, "rt": "あ" }
  ]
}
```

- `text`: The original text
- `ruby`: An array of ruby annotations
  - `s`: Start position (inclusive)
  - `e`: End position (exclusive)
  - `rt`: Ruby text (reading)

This format is particularly useful when you need to:

- Build custom rendering logic
- Integrate with frontend frameworks (React, Vue, etc.)
- Process ruby annotations programmatically
- Store furigana data in a structured format



## Demo

You can check the demo [here](https://gene891212.github.io/kuroshiro-enhance).

## Feature

- Japanese Sentence => Hiragana, Katakana or Romaji
- Furigana and okurigana supported
- 🆕Multiple morphological analyzers supported
- 🆕Multiple romanization systems supported
- Useful Japanese utils
- 🆕 TypeScript support with built-in type definitions

## Breaking Change in 2.x

- **Node.js Environment Requirement**: Upgraded toolchain to `tsup` and `vitest`. Kuroshiro now explicitly requires `Node.js >= 18.0.0` to function properly.
- **CommonJS Require Syntax**: Since the codebase now strictly transpiles ES Modules and outputs CommonJS via `.cjs` exports, you must append `.default` when importing via standard CommonJS in Node: `const Kuroshiro = require("kuroshiro-enhance").default;`
- **TypeScript Strictness**: Type definitions are now natively bundled (`index.d.ts`), so TypeScript users will now see compiler errors if passing incorrect parameter types to initialization or conversion methods.

## Breaking Change in 1.x

- Seperate morphological analyzer from phonetic notation logic to make it possible that we can use different morphological analyzers ([ready-made](#ready-made-analyzer-plugins) or [customized](CONTRIBUTING.md#how-to-submit-new-analyzer-plugins))
- Embrace ES8/ES2017 to use async/await functions
- Use ES6 Module instead of CommonJS

## Ready-made Analyzer Plugins

_You should check the environment compatibility of each analyzer before you start working with them_

| Analyzer      | Node.js Support | Browser Support | Plugin Repo                                                                                  | Developer                             |
| ------------- | --------------- | --------------- | -------------------------------------------------------------------------------------------- | ------------------------------------- |
| Kuromoji      | ✓               | ✓               | [kuroshiro-analyzer-kuromoji](https://github.com/hexenq/kuroshiro-analyzer-kuromoji)         | [Hexen Qi](https://github.com/hexenq) |
| Mecab         | ✓               | ✗               | [kuroshiro-analyzer-mecab](https://github.com/hexenq/kuroshiro-analyzer-mecab)               | [Hexen Qi](https://github.com/hexenq) |
| Yahoo Web API | ✓               | ✗               | [kuroshiro-analyzer-yahoo-webapi](https://github.com/hexenq/kuroshiro-analyzer-yahoo-webapi) | [Hexen Qi](https://github.com/hexenq) |

## Usage

### Node.js (or using a module bundler (e.g. Webpack))

> **Prerequisite:** Node.js >= 18 is required.

Install with npm package manager:

```sh
$ npm install kuroshiro-enhance
```

Or with pnpm:

```sh
$ pnpm add kuroshiro-enhance
```

Or with yarn:

```sh
$ yarn add kuroshiro-enhance
```

Load the library:

_Support ES6 Module `import`_

```js
import Kuroshiro from "kuroshiro-enhance";
// Initialize kuroshiro with an instance of analyzer (You could check the [apidoc](#initanalyzer) for more information):
// For this example, you should npm install and import the kuromoji analyzer first
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji";
// Instantiate
const kuroshiro = new Kuroshiro();
// Initialize
// Here uses async/await, you could also use Promise
await kuroshiro.init(new KuromojiAnalyzer());
// Convert what you want
const result = await kuroshiro.convert(
  "感じ取れたら手を繋ごう、重なるのは人生のライン and レミリア最高！",
  { to: "hiragana" },
);
```


### Browser

Add `dist/kuroshiro.min.js` to your frontend project (you may first build it from source with `npm run build` after `npm install`), and in your HTML:

```html
<script src="url/to/kuroshiro.min.js"></script>
```

For this example, you should also include `kuroshiro-analyzer-kuromoji.min.js` which you could get from [kuroshiro-analyzer-kuromoji](https://github.com/hexenq/kuroshiro-analyzer-kuromoji)

```html
<script src="url/to/kuroshiro-analyzer-kuromoji.min.js"></script>
```

Instantiate:

```js
var kuroshiro = new Kuroshiro();
```

Initialize kuroshiro with an instance of analyzer, then convert what you want:

```js
kuroshiro
  .init(new KuromojiAnalyzer({ dictPath: "url/to/dictFiles" }))
  .then(function () {
    return kuroshiro.convert(
      "感じ取れたら手を繋ごう、重なるのは人生のライン and レミリア最高！",
      { to: "hiragana" },
    );
  })
  .then(function (result) {
    console.log(result);
  });
```

## API

### Constructor

**Examples**

```js
const kuroshiro = new Kuroshiro();
```

### Instance Medthods

#### init(analyzer)

Initialize kuroshiro with an instance of analyzer. You should first import an analyzer and initialize it. You can make use of the [Ready-made Analyzers](#ready-made-analyzer-plugins) listed above. And please refer to documentation of analyzers for analyzer initialization instructions

**Arguments**

- `analyzer` - An instance of analyzer.

**Examples**

```js
await kuroshiro.init(new KuromojiAnalyzer());
```

#### convert(str, [options])

Convert given string to target syllabary with options available

**Arguments**

- `str` - A String to be converted.
- `options` - _Optional_ kuroshiro has several convert options as below.

| Options                   | Type    | Default    | Description                                                                               |
| ------------------------- | ------- | ---------- | ----------------------------------------------------------------------------------------- |
| to                        | String  | "hiragana" | Target syllabary [`hiragana`, `katakana`, `romaji`]                                       |
| mode                      | String  | "normal"   | Convert mode [`normal`, `spaced`, `okurigana`, `furigana`, `furigana_map`] **(Updated!)** |
| includeKatakana           | boolean | false      | Whether to include Katakana in Furigana/Furigana Map mode **(New!)**                      |
| romajiSystem<sup>\*</sup> | String  | "hepburn"  | Romanization system [`nippon`, `passport`, `hepburn`]                                     |
| delimiter_start           | String  | "("        | Delimiter(Start)                                                                          |
| delimiter_end             | String  | ")"        | Delimiter(End)                                                                            |

\*_: Param `romajiSystem` is only applied when the value of param `to` is `romaji`. For more about it, check [Romanization System](#romanization-system)_

**Examples**

```js
// normal
await kuroshiro.convert(
  "感じ取れたら手を繋ごう、重なるのは人生のライン and レミリア最高！",
  { mode: "okurigana", to: "hiragana" },
);
// result：かんじとれたらてをつなごう、かさなるのはじんせいのライン and レミリアさいこう！
```

```js
// spaced
await kuroshiro.convert(
  "感じ取れたら手を繋ごう、重なるのは人生のライン and レミリア最高！",
  { mode: "okurigana", to: "hiragana" },
);
// result：かんじとれ たら て を つなご う 、 かさなる の は じんせい の ライン   and   レミ リア さいこう ！
```

```js
// okurigana
await kuroshiro.convert(
  "感じ取れたら手を繋ごう、重なるのは人生のライン and レミリア最高！",
  { mode: "okurigana", to: "hiragana" },
);
// result: 感(かん)じ取(と)れたら手(て)を繋(つな)ごう、重(かさ)なるのは人生(じんせい)のライン and レミリア最高(さいこう)！
```

```js
// furigana
await kuroshiro.convert(
  "感じ取れたら手を繋ごう、重なるのは人生のライン and レミリア最高！",
  { mode: "furigana", to: "hiragana" },
);
// result: <ruby>感<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>じ<ruby>取<rp>(</rp><rt>と</rt><rp>)</rp></ruby>れたら<ruby>手<rp>(</rp><rt>て</rt><rp>)</rp></ruby>を<ruby>繋<rp>(</rp><rt>つな</rt><rp>)</rp></ruby>ごう、<ruby>重<rp>(</rp><rt>かさ</rt><rp>)</rp></ruby>なるのは<ruby>人生<rp>(</rp><rt>じんせい</rt><rp>)</rp></ruby>のライン and レミリア<ruby>最高<rp>(</rp><rt>さいこう</rt><rp>)</rp></ruby>！
```

```js
// furigana_map (New!)
await kuroshiro.convert("古びたテディベア", {mode:"furigana_map", to:"hiragana", includeKatakana: true});
// result:
{
  "text": "古びたテディベア",
  "ruby": [
    { "s": 0, "e": 1, "rt": "ふる" },
    { "s": 3, "e": 4, "rt": "て" },
    { "s": 4, "e": 5, "rt": "で" },
    { "s": 5, "e": 6, "rt": "ぃ" },
    { "s": 6, "e": 7, "rt": "べ" },
    { "s": 7, "e": 8, "rt": "あ" }
  ]
}
```

### Utils

**Examples**

```js
const result = Kuroshiro.Util.isHiragana("あ"));
```

#### isHiragana(char)

Check if input char is hiragana.

#### isKatakana(char)

Check if input char is katakana.

#### isKana(char)

Check if input char is kana.

#### isKanji(char)

Check if input char is kanji.

#### isJapanese(char)

Check if input char is Japanese.

#### hasHiragana(str)

Check if input string has hiragana.

#### hasKatakana(str)

Check if input string has katakana.

#### hasKana(str)

Check if input string has kana.

#### hasKanji(str)

Check if input string has kanji.

#### hasJapanese(str)

Check if input string has Japanese.

#### kanaToHiragna(str)

Convert input kana string to hiragana.

#### kanaToKatakana(str)

Convert input kana string to katakana.

#### kanaToRomaji(str, system)

Convert input kana string to romaji. Param `system` accepts `"nippon"`, `"passport"`, `"hepburn"` (Default: "hepburn").

## Romanization System

kuroshiro supports three kinds of romanization systems.

`nippon`: Nippon-shiki romanization. Refer to [ISO 3602 Strict](http://www.age.ne.jp/x/nrs/iso3602/iso3602.html).

`passport`: Passport-shiki romanization. Refer to [Japanese romanization table](https://www.ezairyu.mofa.go.jp/passport/hebon.html) published by Ministry of Foreign Affairs of Japan.

`hepburn`: Hepburn romanization. Refer to [BS 4812 : 1972](https://archive.is/PiJ4).

There is a useful [webpage](http://jgrammar.life.coocan.jp/ja/data/rohmaji2.htm) for you to check the difference between these romanization systems.

### Notice for Romaji Conversion

Since it's impossible to fully automatically convert **furigana** directly to **romaji** because furigana lacks information on pronunciation (Refer to [なぜ フリガナでは ダメなのか？](https://green.adam.ne.jp/roomazi/onamae.html#naze)).

kuroshiro will not handle chōon when processing directly furigana (kana) -> romaji conversion with every romanization system (Except that Chōonpu will be handled)

_For example, you'll get "kousi", "koushi", "koushi" respectively when converts kana "こうし" to romaji
using `nippon`, `passport`, `hepburn` romanization system._

The kanji -> romaji conversion with/without furigana mode is **unaffected** by this logic.

## Contributing

Please check [CONTRIBUTING](CONTRIBUTING.md).

## Inspired By

- kuromoji
- wanakana

## License

MIT
