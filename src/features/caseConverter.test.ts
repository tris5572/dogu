import { expect, test, describe } from "vitest";
import { mergeWords, splitWords } from "./caseConverter";

describe("CaseConverter", () => {
  describe("splitWords", () => {
    test("camelCase を分割できること", () => {
      expect(splitWords("camelCase")).toEqual(["camel", "Case"]);
    });

    test("snake_case を分割できること", () => {
      expect(splitWords("snake_case")).toEqual(["snake", "case"]);
    });

    test("PascalCase を分割できること", () => {
      expect(splitWords("PascalCase")).toEqual(["Pascal", "Case"]);
    });

    test("kebab-case を分割できること", () => {
      expect(splitWords("kebab-case")).toEqual(["kebab", "case"]);
    });

    test("Train-Case を分割できること", () => {
      expect(splitWords("Train-Case")).toEqual(["Train", "Case"]);
    });

    test("スペース区切りを分割できること", () => {
      expect(splitWords("space separated")).toEqual(["space", "separated"]);
    });

    test("複数の区切り文字を含む文字列を分割できること", () => {
      expect(splitWords("thisIs_mixed-case Test")).toEqual([
        "this",
        "Is",
        "mixed",
        "case",
        "Test",
      ]);
    });

    test("1つの単語の場合は1要素の配列を返すこと", () => {
      expect(splitWords("Single")).toEqual(["Single"]);
    });

    test("空文字列の場合は空配列を返すこと", () => {
      expect(splitWords("")).toEqual([]);
    });

    test("連続する区切り文字を分割できること", () => {
      expect(splitWords("multiple---delimiters__here")).toEqual([
        "multiple",
        "delimiters",
        "here",
      ]);
    });

    test("先頭と末尾の区切り文字を無視すること", () => {
      expect(splitWords("_leading_and_trailing-")).toEqual([
        "leading",
        "and",
        "trailing",
      ]);
    });

    test("数字を含む文字列を分割できること", () => {
      expect(splitWords("version24Update")).toEqual(["version24", "Update"]);
    });

    test("数字の直前にアクロニムがある場合に分割できること", () => {
      expect(splitWords("versionJSON24Update")).toEqual([
        "version",
        "JSON24",
        "Update",
      ]);
    });

    test("数字の直後にアクロニムがある場合に分割できること", () => {
      expect(splitWords("version24JSON")).toEqual(["version24", "JSON"]);
    });

    test("数字のみでは分割されないこと", () => {
      expect(splitWords("version24update")).toEqual(["version24update"]);
    });

    test("特殊文字を含む文字列を分割できること", () => {
      expect(splitWords("special@char#test")).toEqual(["special@char#test"]);
    });

    test("デフォルトでは、連続する大文字を1単語として扱うこと", () => {
      expect(splitWords("AResponseJSONData")).toEqual([
        "A",
        "Response",
        "JSON",
        "Data",
      ]);
    });

    describe("オプション指定", () => {
      test("splitAcronyms を true にすると、連続する大文字を1文字ずつ扱うこと", () => {
        expect(splitWords("JSONResponseData", { splitAcronyms: true })).toEqual(
          ["J", "S", "O", "N", "Response", "Data"],
        );
      });

      test("splitAfterNumbers を true にすると、数字の後で分割されること", () => {
        expect(
          splitWords("version24update", { splitAfterNumbers: true }),
        ).toEqual(["version24", "update"]);
      });
    });
  });

  describe("mergeWords", () => {
    describe("camelCase", () => {
      test("マージできること", () => {
        expect(
mergeWords(["hello", "world"], { caseType: CaseType.Camel }),
        ).toBe("helloWorld");
      });

      test("空配列の場合は空文字列を返すこと", () => {
        expect(mergeWords([], { caseType: CaseType.Camel })).toBe("");
      });

      test("単語が1つの場合でも機能すること", () => {
        expect(mergeWords(["hello"], { caseType: CaseType.Camel })).toBe(
"hello",
);
      });

      test("先頭が大文字で始まる場合、小文字で始まる文字列になること", () => {
        expect(mergeWords(["Hello"], { caseType: CaseType.Camel })).toBe(
"hello",
);
      });

      test("アクロニムを維持すること", () => {
        expect(
          mergeWords(["THE", "hello", "THIS", "world"], {
caseType: CaseType.Camel,
}),
        ).toBe("THEHelloTHISWorld");
      });
    });
  });
});
