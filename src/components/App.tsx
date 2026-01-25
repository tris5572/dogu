import { Outlet, Route, Routes } from "react-router";
import styles from "./App.module.css";
import { Card } from "./Card";
import { CaseConverter } from "./pages/CaseConverter";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/case-converter" element={<CaseConverter />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.contentWrapper}>
        <Outlet />
      </div>
    </div>
  );
}

function Main() {
  return (
    <>
      <Category title="テキスト" />
      <div className={styles.cardWrapper}>
        <Card
          title="ケース変換"
          description="camelCase、snake_case、PascalCaseなどへの変換"
          path="/case-converter"
        />
      </div>
    </>
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
