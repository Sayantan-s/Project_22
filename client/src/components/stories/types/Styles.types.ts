import { CSSObject, CSSProp } from "styled-components";

export type Colors =
  | "primary"
  | "secondary"
  | "neutral"
  | "success"
  | "warning"
  | "danger";

export type Variants = "default" | "flat" | "light" | "gradient" | "unstyled";

export type Strength = 0.5 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type Rounded = "xs" | "sm" | "md" | "xl" | "full";

export type Size = "xs" | "sm" | "md" | "lg" | "xl";

export type CSS = CSSObject | CSSProp;
