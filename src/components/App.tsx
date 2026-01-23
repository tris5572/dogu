import styles from "./App.module.css";
import { Card } from "./Card";

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Category title="テキスト" />
      <div className={styles.cardWrapper}>
        <Card title="カード1" />
        <Card title="カード2" />
        <Card title="カード3" />
        <Card title="カード4" />
        <Card title="カード5" />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className={styles.header}>
      dogu<span className={styles.small}> (道具)</span>
    </header>
  );
}

function Category(props: { title: string }) {
  return <h3 className={styles.category}>{props.title}</h3>;
}
