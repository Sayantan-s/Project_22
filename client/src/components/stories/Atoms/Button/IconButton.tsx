import { PolymorphicRef } from "components/stories/types/Polymorphic.types";
import React, { forwardRef } from "react";
import { Loader } from "../Loader";
import { Props } from "./IconButton.interface";
import { Component } from "./IconButton.styles";

export const IconButton = forwardRef(
  <C extends React.ElementType = "button">(
    {
      icon: Icon,
      isLoading = false,
      isDisabled = false,
      variant = "default",
      color = "primary",
      ...rest
    }: Props<C>,
    ref?: PolymorphicRef<C>,
  ) => (
    <Component
      variant={variant}
      color={color}
      disabled={isDisabled}
      {...rest}
      ref={ref}
    >
      {isLoading ? (
        <Loader
          color={color}
          strength={variant === "default" || variant === "gradient" ? 50 : 600}
          size={130}
          className="spinner"
        />
      ) : (
        <Icon
          size={"24"}
          color={color}
          strength={variant === "default" || variant === "gradient" ? 50 : 600}
        />
      )}
    </Component>
  ),
);
