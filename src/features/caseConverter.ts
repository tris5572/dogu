type Options = {
  /** 連続する大文字(アクロニム)を1単語としてみなすかどうかのフラグ */
  handleAcronymsAsWords?: boolean;
};

/**
 * 入力文字列を単語ごとに分割した配列を返す
 *
 * 入力は種類を問わない（camelCase、snake_case、PascalCase、kebab-case、Train-Case、スペース区切りなど）
 */
export function splitWords(input: string, options: Options = {}): string[] {
  const { handleAcronymsAsWords = false } = options;

  if (handleAcronymsAsWords) {
    // 連続する大文字を1単語として扱う場合の処理
    const words = input
      // スペース、アンダースコア、ハイフンで分割
      .split(/[\s_-]+/)
      .flatMap((word) =>
        // camelCase、PascalCaseを分割（連続する大文字を考慮）
        word
          .split(/(?<=[a-z])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])/)
          .map((w) => w.toLowerCase()),
      )
      .filter((word) => word.length > 0);

    return words;
  }

  // 大文字の連続を分割する場合の処理
  const words = input
    // スペース、アンダースコア、ハイフンで分割
    .split(/[\s_-]+/)
    .flatMap((word) =>
      // camelCase、PascalCaseを分割
      word.split(/(?=[A-Z])/).map((w) => w.toLowerCase()),
    )
    .filter((word) => word.length > 0);

  return words;
}
