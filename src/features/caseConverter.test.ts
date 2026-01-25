import { expect, test, describe } from "vitest";
import { splitWords } from "./caseConverter";

describe("CaseConverter", () => {
  describe("splitWords", () => {
    test("camelCase を分割できること", () => {
      expect(splitWords("camelCase")).toEqual(["camel", "case"]);
    });

    test("snake_case を分割できること", () => {
      expect(splitWords("snake_case")).toEqual(["snake", "case"]);
    });

    test("PascalCase を分割できること", () => {
      expect(splitWords("PascalCase")).toEqual(["pascal", "case"]);
    });

    test("kebab-case を分割できること", () => {
      expect(splitWords("kebab-case")).toEqual(["kebab", "case"]);
    });

    test("Train-Case を分割できること", () => {
      expect(splitWords("Train-Case")).toEqual(["train", "case"]);
    });

    test("スペース区切りを分割できること", () => {
      expect(splitWords("space separated")).toEqual(["space", "separated"]);
    });

    test("複数の区切り文字を含む文字列を分割できること", () => {
      expect(splitWords("thisIs_mixed-case Test")).toEqual([
        "this",
        "is",
        "mixed",
        "case",
        "test",
      ]);
    });

    test("1つの単語の場合は1要素の配列を返すこと", () => {
      expect(splitWords("Single")).toEqual(["single"]);
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
      expect(splitWords("version24Update")).toEqual(["version24", "update"]);
    });

    test("数字のみでは分割されないこと", () => {
      expect(splitWords("version24update")).toEqual(["version24update"]);
    });

    test("特殊文字を含む文字列を分割できること", () => {
      expect(splitWords("special@char#test")).toEqual(["special@char#test"]);
    });

    test("デフォルトでは、連続する大文字を1文字ずつ扱うこと", () => {
      expect(splitWords("JSONResponseData")).toEqual([
        "j",
        "s",
        "o",
        "n",
        "response",
        "data",
      ]);
    });

    test("オプションを指定すると、連続する大文字を1単語として扱うこと", () => {
      expect(
        splitWords("AResponseJSONData", {
          handleAcronymsAsWords: true,
        }),
      ).toEqual(["a", "response", "json", "data"]);
    });
  });
});
