/**
 * Token interface representing a parsed morphological token.
 */
export interface Token {
    surface_form: string;
    pos: string;
    reading?: string;
    pronunciation?: string;
}

/**
 * Interface that all Kuroshiro analyzers must implement.
 */
export interface Analyzer {
    init(): Promise<void>;
    parse(str: string): Promise<Token[]>;
}

/**
 * Valid syllabaries for conversion targets.
 */
export type TargetSyllabary = "hiragana" | "katakana" | "romaji";

/**
 * Valid modes for conversion.
 */
export type ConvertMode = "normal" | "spaced" | "okurigana" | "furigana" | "furigana_map";

/**
 * Valid romanization systems.
 */
export type RomanizationSystem = "nippon" | "passport" | "hepburn";

/**
 * Options passed to convert method.
 */
export interface ConvertOptions {
    to?: TargetSyllabary;
    mode?: ConvertMode;
    includeKatakana?: boolean;
    romajiSystem?: RomanizationSystem;
    delimiter_start?: string;
    delimiter_end?: string;
}

export interface FuriganaMapResult {
    text: string;
    ruby: Array<{ s: number; e: number; rt: string }>;
}
