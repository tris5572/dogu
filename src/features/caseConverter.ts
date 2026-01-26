type Options = {
  /** 連続する大文字(アクロニム)をそれぞれの文字で分割するかどうかのフラグ。デフォルトでは false */
  splitAcronyms?: boolean;
};

/**
 * 入力文字列を単語ごとに分割した配列を返す
 *
 * - 入力は種類を問わない（camelCase、snake_case、PascalCase、kebab-case、Train-Case、スペース区切りなど）
 * - デフォルトでは、連続する大文字(アクロニム)を1単語として扱う
 */
export function splitWords(input: string, options: Options = {}): string[] {
  const { splitAcronyms = false } = options;

  if (splitAcronyms) {
    // 大文字の連続を分割する場合の処理
    const words = input
      // スペース、アンダースコア、ハイフンで分割
      .split(/[\s_-]+/)
      // camelCase、PascalCaseを分割
      .flatMap((word) => word.split(/(?=[A-Z])/))
      .filter((word) => word.length > 0);

    return words;
  }

  // 連続する大文字を1単語として扱う場合の処理
  const words = input
    // スペース、アンダースコア、ハイフンで分割
    .split(/[\s_-]+/)
    // camelCase、PascalCaseを分割（連続する大文字を考慮）
    .flatMap((word) =>
      word.split(/(?<=[a-z0-9])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])/),
    )
    .filter((word) => word.length > 0);

  return words;
}
