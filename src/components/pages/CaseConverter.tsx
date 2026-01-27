import { useCallback, useState } from "react";
import styles from "./CaseConverter.module.css";
import { Box } from "../commons/Box";
import { ColorArrow } from "../commons/DownArrow";
import { TextInput } from "../commons/TextInput";
import { convertCase, CaseType } from "../../features/caseConverter";

/**
 * 文字列のケースを変換するページ
 */
export function CaseConverter() {
  const [camelCase, setCamelCase] = useState("");

  const onChange = useCallback((value: string) => {
    setCamelCase(convertCase(value, { caseType: CaseType.Camel }));
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
      <Box title="キャメルケース (camelCase)">{camelCase}</Box>
    </div>
  );
}
