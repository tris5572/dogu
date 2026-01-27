import styles from "./Box.module.css";

type Props = {
  /** タイトル */
  title: string;
  /** 内容 */
  children?: React.ReactNode;
};

export function Box({ title, children }: Props) {
  return (
    <div className={styles.box}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
