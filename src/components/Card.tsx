import styled from "./Card.module.css";

export type Props = {
  title: string;
};

/**
 * トップページのカードコンポーネント
 */
export function Card(props: Props) {
  return <div className={styled.card}>{props.title}</div>;
}
