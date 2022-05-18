import React from "react";
import { Loader } from "../Loader";
import { Props } from "./Button.interface";
import { Component } from "./Button.styles";

export const Button = <C extends React.ElementType = "button">({
  children,
  isLoading = false,
  isDisabled = false,
  variant = "default",
  color = "primary",
  loadingText,
  ...rest
}: Props<C>) => (
  <Component
    variant={variant}
    color={color}
    disabled={isDisabled}
    loadingText={loadingText}
    {...rest}
  >
    {isLoading ? (
      <>
        <Loader
          color={color}
          strength={
            variant === "default" || variant === "gradient" ? "50" : "600"
          }
          size={40}
          className="spinner"
        />
        {!!loadingText && loadingText}
      </>
    ) : (
      children
    )}
  </Component>
);
