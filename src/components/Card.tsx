import { Link } from "react-router";
import styled from "./Card.module.css";

export type Props = {
  title: string;
  description: string;
  path: string;
};

/**
 * トップページのカードコンポーネント
 */
export function Card(props: Props) {
  return (
    <Link to={props.path} className={styled.link}>
      <div className={styled.card}>
        <div className={styled.title}>{props.title}</div>
        <div className={styled.description}>{props.description}</div>
      </div>
    </Link>
  );
}
