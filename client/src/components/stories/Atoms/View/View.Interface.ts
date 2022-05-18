import { PolymorphicComponentPropsWithRef } from "components/stories/types/Polymorphic.types";
import { Colors, Strength } from "components/stories/types/Styles.types";

type Display = "flex" | "block" | "inline" | "inline-block" | "inline-flex";

type Justify =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

type Direction = "row" | "row-reverse" | "column" | "column-reverse";

type AlignItems = "flex-start" | "flex-end" | "center" | "stretch" | "baseline";

type AlignContent =
  | "stretch"
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around";

type Wrap = "nowrap" | "wrap" | "wrap-reverse";

type ViewProps = {
  isParent?: boolean;
  backgroundColor?: Colors;
  strength?: Strength;
  display?: Display;
  justify?: Justify;
  direction?: Direction;
  alignItems?: AlignItems;
  alignContent?: AlignContent;
  wrap?: Wrap;
};

export type Props<C extends React.ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C, ViewProps>;
