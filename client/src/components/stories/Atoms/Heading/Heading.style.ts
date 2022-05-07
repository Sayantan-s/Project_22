import styled, { css } from "styled-components";
import { Props } from "./Heading.interface";

export const Component = styled.h1<Props>`
  ${({ level = 1, color = "neutral" }) => css`
    font-size: ${({ theme }) => `${theme.typography.heading[+level - 1]}rem`};
    color: ${({ theme }) => theme.colors[color!][900]};
  `}
`;
