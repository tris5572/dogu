import styles from "./CaseConverter.module.css";
import { TextInput } from "../commons/TextInput";
import { useCallback } from "react";
import { ColorArrow } from "../commons/DownArrow";

/**
 * 文字列のケースを変換するページ
 */
export function CaseConverter() {
  const onChange = useCallback((value: string) => {
    console.log(value);
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
      <div>出力</div>
    </div>
  );
}
