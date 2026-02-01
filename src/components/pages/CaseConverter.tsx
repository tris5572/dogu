import { useCallback, useState, useMemo } from "react";
import styles from "./CaseConverter.module.css";
import { Box } from "../commons/Box";
import { ColorArrow } from "../commons/DownArrow";
import { TextInput } from "../commons/TextInput";
import { convertCase, CaseType } from "../../features/convertCase";
import { ResultText } from "../commons/ResultText";

/**
 * 文字列のケースを変換するページ
 */
export function CaseConverter() {
  const [inputText, setInputText] = useState("");

  const onTextChange = useCallback((value: string) => {
    setInputText(value);
  }, []);

  const results = useMemo(() => {
    return {
      camel: convertCase(inputText, { caseType: CaseType.Camel }),
      pascal: convertCase(inputText, { caseType: CaseType.Pascal }),
      snake: convertCase(inputText, { caseType: CaseType.Snake }),
      upperSnake: convertCase(inputText, { caseType: CaseType.UpperSnake }),
    };
  }, [inputText]);

  return (
    <div className={styles.wrapper}>
      <h2>ケース変換</h2>
      <TextInput
        size={60}
        font="monospace"
        placeholder="文字列を入力"
        onChange={onTextChange}
      />
      <ColorArrow />
      <div className={styles.resultContainer}>
        <Box title="キャメルケース (camelCase)">
          <ResultText text={results.camel} />
        </Box>
        <Box title="パスカルケース (PascalCase)">
          <ResultText text={results.pascal} />
        </Box>
        <Box title="スネークケース (snake_case)">
          <ResultText text={results.snake} />
        </Box>
        <Box title="アッパースネークケース (UPPER_SNAKE_CASE)">
          <ResultText text={results.upperSnake} />
        </Box>
      </div>
    </div>
  );
}
