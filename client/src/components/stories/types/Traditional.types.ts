import { Colors, Rounded, Size, Variants } from "./Styles.types";

export interface TraditionalTypes {
  variant?: Variants | "glass";
  color?: Colors;
  rounded?: Rounded;
  size?: Size;
  outline?: boolean;
  shadow?: boolean;
}
