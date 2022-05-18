import { PolymorphicRef } from "components/stories/types/Polymorphic.types";
import { forwardRef } from "react";
import { Props } from "./View.Interface";
import { Component } from "./View.styles";

export const View = forwardRef(
  <C extends React.ElementType = "div">(
    { isParent = false, ...rest }: Props<C>,
    ref?: PolymorphicRef<C>,
  ) => <Component isParent={isParent} {...rest} ref={ref} />,
);
