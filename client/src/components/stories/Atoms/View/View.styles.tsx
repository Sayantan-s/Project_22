import styled, { css } from "styled-components";
import { SProps, VProps } from "./View.Interface";

export const ComponentView = styled.div<VProps>`
  ${({ isParent = false }) =>
    isParent &&
    css`
      max-width: 144rem;
      margin: 0 auto;
    `}
`;

export const ComponentStack = styled.div<SProps>`
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
`;
