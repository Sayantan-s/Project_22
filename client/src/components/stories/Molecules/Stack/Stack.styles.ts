import styled, { css } from "styled-components";
import { Props } from "./Stack.interface";

export const Component = styled.div<Props>`
  ${({ direction = "h", gap }) =>
    direction == "v"
      ? css`
          & > *:not(:first-child) {
            margin-top: ${() => (gap?.endsWith("px") ? gap : `${gap}rem`)};
          }
        `
      : css`
          display: flex;
          & > *:not(: first-child) {
            margin-left: ${() => (gap?.endsWith("px") ? gap : `${gap}rem`)};
          }
        `}
  ${({ backgroundColor, strength }) =>
    backgroundColor &&
    css`
      background-color: ${({ theme }) =>
        backgroundColor
          ? theme.colors[backgroundColor!][strength || 100]
          : "none"};
    `}
`;
