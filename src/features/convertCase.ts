export const CaseType = {
  Camel: "camel",
  Pascal: "pascal",
  Snake: "snake",
  UpperSnake: "upperSnake",
  Kebab: "kebab",
  Train: "train",
} as const;

export type CaseType = (typeof CaseType)[keyof typeof CaseType];

type SplitOptions = {
  /** 連続する大文字(アクロニム)をそれぞれの文字で分割するかどうかのフラグ。デフォルトでは false */
  splitAcronyms?: boolean;
  /** 数字の後で分割するかどうかのフラグ。デフォルトでは false */
  splitAfterNumbers?: boolean;
};

type MergeOptions = {
  /** 出力するケース名 */
  caseType: CaseType;
};

export type ConvertOptions = SplitOptions & MergeOptions;

/**
 * 文字列のケースを変換する
 */
export function convertCase(input: string, options: ConvertOptions): string {
  const words = splitWords(input, options);
  return mergeWords(words, options);
}

/**
 * 入力文字列を単語ごとに分割した配列を返す
 *
 * - 入力は種類を問わない（camelCase、snake_case、PascalCase、kebab-case、Train-Case、スペース区切りなど）
 * - デフォルトでは、連続する大文字(アクロニム)を1単語として扱う
 * - デフォルトでは、数字の後で分割しない
 */
export function splitWords(
  input: string,
  options: SplitOptions = {},
): string[] {
  const { splitAcronyms = false, splitAfterNumbers = false } = options;

  let words: string[] = [];

  if (splitAcronyms) {
    // 大文字の連続を分割する場合の処理
    words = input
      // スペース、アンダースコア、ハイフンで分割
      .split(/[\s_-]+/)
      // camelCase、PascalCaseを分割
      .flatMap((word) => word.split(/(?=[A-Z])/))
      .filter((word) => word.length > 0);
  } else {
    // 連続する大文字を1単語として扱う場合の処理
    words = input
      // スペース、アンダースコア、ハイフンで分割
      .split(/[\s_-]+/)
      // camelCase、PascalCaseを分割（連続する大文字を考慮）
      .flatMap((word) =>
        word.split(/(?<=[a-z0-9])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])/),
      )
      .filter((word) => word.length > 0);
  }

  if (splitAfterNumbers) {
    // 数字の後で分割する場合の追加処理
    words = words.flatMap((word) => word.split(/(?<=[0-9])(?=[A-Za-z])/));
  }

  return words;
}

/**
 * 単語のリストをマージする
 *
 * リストは splitWords の出力を想定しており、入力された文字列の大文字小文字は維持される前提
 */
export function mergeWords(words: string[], options: MergeOptions): string {
  const { caseType } = options;

  if (caseType === CaseType.Camel) {
    return words
      .map(
        (word, i) =>
          i === 0
            ? isAcronym(word)
              ? word // 先頭のアクロニムはそのまま
              : word.charAt(0).toLowerCase() + word.slice(1) // アクロニム以外なら先頭文字を小文字化
            : word.charAt(0).toUpperCase() + word.slice(1), // 2単語目以降は先頭文字を大文字化
      )
      .join("");
  }
  if (caseType === CaseType.Pascal) {
    return words
      .map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1), // 各単語の先頭文字を大文字化
      )
      .join("");
  }
  if (caseType === CaseType.Snake) {
    return words
      .map(
        (word) =>
          isAcronym(word) ? word : word.charAt(0).toLowerCase() + word.slice(1), // アクロニム以外は小文字化
      )
      .join("_");
  }
  if (caseType === CaseType.UpperSnake) {
    return words
      .map((word) => word.toUpperCase()) // 全て大文字化
      .join("_");
  }

  return "";
}

/**
 * 渡された文字列がアクロニム(すべてが大文字)かどうかを判定する
 *
 * ただし1文字の場合はアクロニムとみなさない
 */
export function isAcronym(word: string): boolean {
  if (word.length <= 1) {
    return false;
  }
  return /^[A-Z]+$/.test(word);
}
