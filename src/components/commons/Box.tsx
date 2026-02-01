import styles from "./Box.module.css";

type Props = {
  /** タイトル */
  title: string;
  /** サブタイトル */
  subtitle?: string;
  /** 内容 */
  children?: React.ReactNode;
};

export function Box(props: Props) {
  return (
    <div className={styles.box}>
      <div className={styles.titles}>
        <h3>{props.title}</h3>
        {props.subtitle && <p className={styles.subtitle}>{props.subtitle}</p>}
      </div>
      {props.children}
    </div>
  );
}
