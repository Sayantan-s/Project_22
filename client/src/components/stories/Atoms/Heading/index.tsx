import { forwardRef, PropsWithChildren, Ref } from "react";
import { Props } from "./Heading.interface";
import { Component } from "./Heading.style";

const Heading = forwardRef(
  (
    { level = "1", as = `h${level}`, ...rest }: PropsWithChildren<Props>,
    ref?: Ref<HTMLHeadingElement>,
  ) => {
    return <Component level={level} as={as} {...rest} ref={ref} />;
  },
);

export default Heading;
