import styled, { css } from "styled-components";
import { Props } from "./View.Interface";

export const Component = styled.div<Props>`
  ${({ isParent = false }) =>
    isParent &&
    css`
      max-width: 144rem;
      margin: 0 auto;
      height: 100%;
    `}

  ${({
    backgroundColor,
    strength,
    display,
    wrap,
    justify,
    alignContent,
    alignItems,
    direction,
  }) => css`
    background-color: ${({ theme }) =>
      backgroundColor
        ? theme.colors[backgroundColor][strength || "100"]
        : "none"};

    ${() =>
      display &&
      css`
        display: ${() => display};
      `}
    ${() =>
      display === "flex" &&
      css`
        justify-content: ${justify};
        flex-wrap: ${wrap};
        align-content: ${alignContent};
        align-items: ${alignItems};
        flex-direction: ${direction};
      `}
  `}
`;
