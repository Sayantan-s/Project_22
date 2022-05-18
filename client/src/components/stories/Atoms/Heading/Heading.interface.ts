import { Colors, Strength } from "components/stories/types/Styles.types";

type HeadingSize = "1" | "2" | "3 " | "4" | "5" | "6";

export interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: `h${HeadingSize}`;
  level?: HeadingSize;
  color?: Colors;
  strength?: Strength;
}
