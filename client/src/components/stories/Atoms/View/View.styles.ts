import styled, { css } from "styled-components";
import { Props } from "./View.Interface";

export const Component = styled.div<Props>`
  ${({ isParent = false }) =>
    isParent &&
    css`
      max-width: 144rem;
      margin: 0 auto;
    `}

  ${({ backgroundColor, strength, display }) => css`
    background-color: ${({ theme }) =>
      backgroundColor
        ? theme.colors[backgroundColor][strength || 100]
        : "none"};

    ${() =>
      display &&
      css`
        display: ${() => display};
      `}
  `}
`;
