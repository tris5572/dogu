import { HiOutlineClipboardDocument } from "react-icons/hi2";
import styles from "./ClipboardCopyButton.module.css";

type Props = {
  /** コピーする内容 */
  content: string;
};

/**
 * 渡された文字列をクリップボードにコピーするボタンコンポーネント
 */
export function ClipboardCopyButton(props: Props) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(props.content);
    } catch {
      // TODO: 画面へ何らかの方法で表示する
      console.error("クリップボードへのコピーに失敗しました。");
    }
  };

  return (
    <button onClick={handleCopy}>
      <HiOutlineClipboardDocument className={styles.icon} />
    </button>
  );
}
