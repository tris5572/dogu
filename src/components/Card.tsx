import styled from "./Card.module.css";

export type Props = {
  title: string;
  description: string;
};

/**
 * トップページのカードコンポーネント
 */
export function Card(props: Props) {
  return (
    <div className={styled.card}>
      <div className={styled.title}>{props.title}</div>
      <div className={styled.description}>{props.description}</div>
    </div>
  );
}
