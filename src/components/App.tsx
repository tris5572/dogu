import styles from "./App.module.css";
import { Card } from "./Card";

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Category title="テキスト" />
      <div className={styles.cardWrapper}>
        <Card
          title="ケース変換"
          description="camelCase、snake_case、PascalCaseなどへの変換"
        />
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
