import { PropsWithChildren } from "react";
import { Props } from "./Heading.interface";
import { Component } from "./Heading.style";

function Heading({
  level = "1",
  as = `h${level}`,
  ...rest
}: PropsWithChildren<Props>) {
  return <Component level={level} as={as} {...rest} />;
}

export default Heading;
