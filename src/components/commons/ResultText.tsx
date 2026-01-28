import styles from "./ResultText.module.css";
import { ClipboardCopyButton } from "./ClipboardCopyButton";

type Props = {
  /** 表示するテキスト */
  text: string;
};

/**
 * 1つの結果（文字列）を表示するコンポーネント
 *
 * クリップボードへのコピーボタンも表示する
 */
export function ResultText(props: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>{props.text}</div>
      <ClipboardCopyButton content={props.text} />
    </div>
  );
}
