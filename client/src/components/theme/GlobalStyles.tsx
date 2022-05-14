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
    font-weight : ${({ theme }) => theme.fontWeights.medium};
    height : 100vh;
    width :100%;
    #root {
        height: 100%;
    }
}

`;
