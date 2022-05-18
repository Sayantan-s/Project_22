import { Colors, Strength } from "../types/Styles.types";

export interface IconProps {
  color: Colors;
  size: "16" | "24" | "32" | "48";
  strength?: Strength;
}

export type IconType = ({ size, color, strength }: IconProps) => JSX.Element;
