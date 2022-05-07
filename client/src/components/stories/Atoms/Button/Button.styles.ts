import styled, { css } from "styled-components";
import StyleUtils from "../../utils/style.util";
import { Props } from "./Button.interface";

export const Component = styled.button<Props>`
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  border: ${({ outline = false, theme, color = "primary" }) =>
    outline ? ` 2px solid ${theme.colors[color!][300]}` : "none"};
  ${({ variant = "default", color = "primary" }) => {
    switch (variant) {
      case "flat":
        return css`
          background-color: ${({ theme }) => theme.colors[color][100]};
          color: ${({ theme }) => theme.colors[color][600]};
          &:hover {
            background-color: ${({ theme }) => theme.colors[color][200]};
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
      case "default":
      default:
        return css`
          background-color: ${({ theme }) => theme.colors[color][500]};
          color: ${({ theme }) => theme.colors[color][50]};
          &:hover {
            background-color: ${({ theme }) => theme.colors[color][600]};
          }
        `;
    }
  }};

  ${({ size }) => {
    switch (size) {
      case "md":
      default:
        return css`
          width: 12rem;
          padding: 1.2rem 1.6rem;
          font-size: ${({ theme: { fontSizes } }) =>
            StyleUtils.calcFontSize(fontSizes[2])};
        `;
    }
  }}

  border-radius: ${({ rounded = "sm", theme: { radii } }) =>
    rounded === "full" ? "9999px" : `${radii[rounded!]}rem`};
`;
