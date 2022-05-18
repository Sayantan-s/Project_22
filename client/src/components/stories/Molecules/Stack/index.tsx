import { PolymorphicRef } from "components/stories/types/Polymorphic.types";
import React, { forwardRef } from "react";
import { Props } from "./Stack.interface";
import { Component } from "./Stack.styles";

export const Stack = forwardRef(
  <C extends React.ElementType = "div">(
    { gap = "1", ...rest }: Props<C>,
    ref?: PolymorphicRef<C>,
  ) => <Component gap={gap} {...rest} ref={ref} />,
);
