import {
  PiArrowFatDownDuotone,
  PiArrowFatLeftDuotone,
  PiArrowFatRightDuotone,
  PiArrowFatUpDuotone,
} from "react-icons/pi";

type Props = {
  /** 方向。省略時は down */
  direction?: "up" | "down" | "left" | "right";
  /** サイズ。number の指定時は rem として適用。省略時は 2rem */
  size?: string | number;
  /** 色。省略時はブランドカラー */
  color?: string;
};

/**
 * 色付き矢印コンポーネント
 */
export function ColorArrow(props: Props) {
  const direction = props.direction ?? "down";
  const size =
    typeof props.size === "number"
      ? `${props.size}rem`
      : (props.size ?? "2rem");
  const color = props.color ?? "var(--brand)";

  switch (direction) {
    case "up":
      return (
        <div>
          <PiArrowFatUpDuotone size={size} color={color} />
        </div>
      );
    case "down":
      return (
        <div>
          <PiArrowFatDownDuotone size={size} color={color} />
        </div>
      );
    case "left":
      return (
        <div>
          <PiArrowFatLeftDuotone size={size} color={color} />
        </div>
      );
    case "right":
      return (
        <div>
          <PiArrowFatRightDuotone size={size} color={color} />
        </div>
      );
  }
}
