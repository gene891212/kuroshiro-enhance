/**
 * @jest-environment jsdom
 */

import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji";
import Kuroshiro from "../src/index.js";

describe("Kuroshiro Browser Test", () => {
    const EXAMPLE_TEXT = "感じ取れたら手を繋ごう、重なるのは人生のライン and レミリア最高！";

    let kuroshiro;

    beforeAll(async () => {
        kuroshiro = new Kuroshiro();
        await kuroshiro.init(new KuromojiAnalyzer());
    });
    it("Util Test", () => {
        const ori = "公";
        const result = Kuroshiro.Util.isKanji(ori);
        expect(result).toBeTruthy();
    });
    it("Convert Test", async () => {
        const ori = EXAMPLE_TEXT;
        const result = await kuroshiro.convert(ori, { to: "hiragana" });
        expect(result).toEqual("かんじとれたらてをつなごう、かさなるのはじんせいのライン and レミリアさいこう！");
    });
    it("Convert Test - furigana_map", async () => {
        const ori = EXAMPLE_TEXT;
        const result = await kuroshiro.convert(ori, { mode: "furigana_map", to: "hiragana" });
        expect(result).toEqual({
            text: "感じ取れたら手を繋ごう、重なるのは人生のライン and レミリア最高！",
            ruby: [
                { s: 0, e: 1, rt: "かん" },
                { s: 2, e: 3, rt: "と" },
                { s: 6, e: 7, rt: "て" },
                { s: 8, e: 9, rt: "つな" },
                { s: 12, e: 13, rt: "かさ" },
                { s: 17, e: 19, rt: "じんせい" },
                { s: 32, e: 34, rt: "さいこう" }
            ]
        });
    });
});
