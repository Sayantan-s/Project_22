import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    padding :0 ;
    margin : 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
}

body{
    font-size: 1.4rem;
    font-family: ${({ theme }) => theme.font};
}

`;
