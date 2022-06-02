import { CSSObject, CSSProp } from "styled-components";

export type Colors =
  | "primary"
  | "secondary"
  | "neutral"
  | "success"
  | "warning"
  | "danger";

export type Variants =
  | "default"
  | "flat"
  | "light"
  | "gradient"
  | "unstyled"
  | "glass";

export type Strength =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export type Rounded = "xs" | "sm" | "md" | "xl" | "full";

export type Size = "xs" | "sm" | "md" | "lg" | "xl";

export type CSS = CSSObject | CSSProp;

export interface TraditionalTypes {
  variant?: Variants;
  color?: Colors;
  rounded?: Rounded;
  size?: Size;
  outline?: boolean;
  shadow?: boolean;
}
