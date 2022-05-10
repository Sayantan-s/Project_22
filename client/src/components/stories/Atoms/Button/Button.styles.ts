import { lighten } from "polished";
import styled, { css } from "styled-components";
import StyleUtils from "../../utils/style.util";
import { Props } from "./Button.interface";

export const Component = styled.button<Omit<Props, "isDisabled" | "isLoading">>`
  ${({
    variant,
    color,
    outline = false,
    size = "md",
    rounded = "sm",
    shadow = false,
    loadingText,
    spinnerPlacement,
  }) =>
    variant !== "unstyled" &&
    css`
      appearance: none;
      -webkit-appearance: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      user-select: none,
      position: relative;
      white-space: nowrap;
      vertical-align: middle;
      text-decoration: none;
      font-family: ${({ theme }) => theme.font};
      font-weight : ${({ theme }) => theme.fontWeights.medium};
      border: ${({ theme }) =>
        outline ? ` 2px solid ${theme.colors[color!][300]}` : "none"};
      &:disabled {
        cursor: default;
      }
      ${() => {
        switch (variant) {
          case "flat":
            return css`
              background-color: ${({ theme }) => theme.colors[color][100]};
              color: ${({ theme }) => theme.colors[color][600]};
              &:hover {
                background-color: ${({ theme }) => theme.colors[color][200]};
              }
              &:disabled {
                background-color: ${({ theme }) => theme.colors[color][100]};
                color: ${({ theme }) => lighten(0.3, theme.colors[color][600])};
              }
            `;
          case "light":
            return css`
              background-color: transparent;
              color: ${({ theme }) => theme.colors[color][600]};
              &:hover {
                color: ${({ theme }) => theme.colors[color][700]};
              }
            `;
          case "gradient":
            return css`
              color: ${({ theme }) => theme.colors[color][50]};
              background: ${({ theme }) =>
                `linear-gradient(175deg, ${theme.colors[color][400]}, ${lighten(
                  0.02,
                  theme.colors[color][600],
                )})`};
              &:disabled {
                background: ${({ theme }) =>
                  `linear-gradient(175deg, ${
                    theme.colors[color][300]
                  }, ${lighten(0.1, theme.colors[color][600])})`};
              }
            `;
          case "default":
          default:
            return css`
              background-color: ${({ theme }) => theme.colors[color][500]};
              color: ${({ theme }) => theme.colors[color][50]};
              &:hover {
                background-color: ${({ theme }) => theme.colors[color][600]};
              }
              &:disabled {
                background-color: ${({ theme }) =>
                  lighten(0.08, theme.colors[color][500])};
              }
            `;
        }
      }};

      ${() => {
        switch (size) {
          case "xs":
            return css`
              min-width: 8rem;
              height: 3.5rem;
              padding: 0.8rem 1.2rem;
              font-size: ${({ theme: { fontSizes } }) =>
                StyleUtils.calcFontSize(fontSizes[1])};
            `;
          case "sm":
            return css`
              min-width: 10rem;
              height: 4rem;
              padding: 1rem 1.4rem;
              font-size: ${({ theme: { fontSizes } }) =>
                StyleUtils.calcFontSize(fontSizes[2])};
            `;
          case "lg":
            return css`
              min-width: 14rem;
              height: 5.2rem;
              padding: 1.4rem 1.8rem;
              font-size: ${({ theme: { fontSizes } }) =>
                StyleUtils.calcFontSize(fontSizes[4])};
            `;
          case "xl":
            return css`
              min-width: 16rem;
              height: 5.6rem;
              padding: 1.6rem 2rem;
              font-size: ${({ theme: { fontSizes } }) =>
                StyleUtils.calcFontSize(fontSizes[4])};
            `;
          case "md":
          default:
            return css`
              min-width: 12rem;
              height: 4.8rem;
              padding: 1.2rem 1.6rem;
              font-size: ${({ theme: { fontSizes } }) =>
                StyleUtils.calcFontSize(fontSizes[3])};
            `;
        }
      }}

      border-radius: ${({ theme: { radii } }) =>
        rounded === "full" ? "9999px" : `${radii[rounded!]}rem`};

      ${() =>
        shadow &&
        css`
          box-shadow: 0px 5px 15px
            ${({ theme }) => lighten(0.05, theme.colors[color][400])};
        `}

      ${() =>
        loadingText &&
        css`
          .spinner {
            order: ${(_) =>
              spinnerPlacement === "start"
                ? "-1"
                : spinnerPlacement === "end"
                ? "1"
                : "0"};
          }
        `}
    `}
`;
