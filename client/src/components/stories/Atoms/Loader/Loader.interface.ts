import { Colors, Strength } from "components/stories/types/Styles.types";

export interface Props extends React.SVGProps<SVGSVGElement> {
  color: Colors;
  strength: Strength;
  size?: number;
}
