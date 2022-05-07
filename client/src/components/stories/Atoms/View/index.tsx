import React from "react";
import { Props } from "./View.Interface";
import { Component } from "./View.styles";

export const View = <C extends React.ElementType = "div">({
  isParent = false,
  ...rest
}: Props<C>) => <Component isParent={isParent} {...rest} />;

export default View;
