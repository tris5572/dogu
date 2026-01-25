import styles from "./TextInput.module.css";

type Props = {
  /** テキストフィールドのサイズ */
  size?: number;
  /** フォントの種類 */
  font?: "monospace";
  /** プレースホルダー */
  placeholder?: string;
  /** 内容が変更されたときの処理 */
  onChange?: (value: string) => void;
};

/**
 * テキスト入力コンポーネント
 */
export function TextInput(props: Props) {
  const size = props.size ?? 20;

  const className = classNameBuilder(props);

  return (
    <input
      type="text"
      className={className}
      size={size}
      placeholder={props.placeholder}
      onChange={(e) => props.onChange?.(e.target.value)}
    />
  );
}

/**
 * プロパティからクラス名を構築する
 */
function classNameBuilder(props: Props): string {
  const classes = [styles.input];

  if (props.font === "monospace") {
    classes.push(styles.monospace);
  }

  return classes.filter(Boolean).join(" ");
}
