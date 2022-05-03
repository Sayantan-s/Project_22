/* eslint-disable import/prefer-default-export */
import React from "react";
import { Props } from "./Button.interface";
import { Component } from "./Button.styles";

export const Button = <C extends React.ElementType = "button">({
  children,
  isLoading = false,
  isDisabled = false,
  ...rest
}: Props<C>) => <Component {...rest}>{children}</Component>;
