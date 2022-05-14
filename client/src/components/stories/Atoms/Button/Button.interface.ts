import {
  Colors,
  Rounded,
  Size,
  Variants,
} from "components/stories/types/Styles.types";
import React from "react";
import { PolymorphicComponentProps } from "../../types/Polymorphic.types";

export interface BtnProps {
  variant?: Variants | "glass";
  color?: Colors;
  rounded?: Rounded;
  size?: Size;
  isLoading?: boolean;
  isDisabled?: boolean;
  outline?: boolean;
  shadow?: boolean;
  loadingText?: "loading" | string;
  spinnerPlacement?: "end" | "start";
}

export type Props<C extends React.ElementType = "button"> =
  PolymorphicComponentProps<C, BtnProps>;
