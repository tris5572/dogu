import { useCallback, useState } from "react";
import styles from "./CaseConverter.module.css";
import { Box } from "../commons/Box";
import { ColorArrow } from "../commons/DownArrow";
import { TextInput } from "../commons/TextInput";
import { convertCase, CaseType } from "../../features/caseConverter";
import { ResultText } from "../commons/ResultText";

/**
 * 文字列のケースを変換するページ
 */
export function CaseConverter() {
  const [camelCase, setCamelCase] = useState("");
  const [pascalCase, setPascalCase] = useState("");

  const onChange = useCallback((value: string) => {
    setCamelCase(convertCase(value, { caseType: CaseType.Camel }));
    setPascalCase(convertCase(value, { caseType: CaseType.Pascal }));
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2>ケース変換</h2>
      <TextInput
        size={60}
        font="monospace"
        placeholder="文字列を入力"
        onChange={onChange}
      />
      <ColorArrow />
      <div className={styles.resultContainer}>
        <Box title="キャメルケース (camelCase)">
          <ResultText text={camelCase} />
        </Box>
        <Box title="パスカルケース (PascalCase)">
          <ResultText text={pascalCase} />
        </Box>
      </div>
    </div>
  );
}
