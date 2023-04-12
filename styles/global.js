import { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`

    * {
      box-sizing: border-box;
    }

    html,
    body {
      height: 100%;
      background: ${({ theme }) => theme.background};
      padding: 0;
      margin: 0;
      scrollbar-gutter: stable;
      -moz-osx-font-smoothing: grayscale;
      min-height: 100vh;
    }



    `;
