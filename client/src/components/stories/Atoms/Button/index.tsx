import { PolymorphicRef } from "components/stories/types/Polymorphic.types";
import React, { forwardRef } from "react";
import { Loader } from "../Loader";
import { Props } from "./Button.interface";
import { Component } from "./Button.styles";

export const Button = forwardRef(
  <C extends React.ElementType = "button">(
    {
      children,
      isLoading = false,
      isDisabled = false,
      variant = "default",
      color = "primary",
      loadingText,
      ...rest
    }: Props<C>,
    ref?: PolymorphicRef<C>,
  ) => (
    <Component
      variant={variant}
      color={color}
      disabled={isDisabled}
      loadingText={loadingText}
      {...rest}
      ref={ref}
    >
      {isLoading ? (
        <>
          <Loader
            color={color}
            strength={
              variant === "default" || variant === "gradient" ? 50 : 600
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
  ),
);
