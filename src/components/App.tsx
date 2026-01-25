import { Route, Routes } from "react-router";
import styles from "./App.module.css";
import { Card } from "./Card";
import { CaseConverter } from "./pages/CaseConverter";

export function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/case-converter" element={<CaseConverter />} />
    </Routes>
  );
}

function Main() {
  return (
    <div className={styles.app}>
      <Header />
      <Category title="テキスト" />
      <div className={styles.cardWrapper}>
        <Card
          title="ケース変換"
          description="camelCase、snake_case、PascalCaseなどへの変換"
          path="/case-converter"
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
