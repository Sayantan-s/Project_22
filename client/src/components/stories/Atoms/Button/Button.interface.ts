import { TraditionalTypes } from "components/stories/types/Styles.types";
import React from "react";
import { PolymorphicComponentProps } from "../../types/Polymorphic.types";
export interface BtnProps extends TraditionalTypes {
  isLoading?: boolean;
  isDisabled?: boolean;
  loadingText?: "loading" | string;
  spinnerPlacement?: "end" | "start";
}

export type Props<C extends React.ElementType = "button"> =
  PolymorphicComponentProps<C, BtnProps>;
