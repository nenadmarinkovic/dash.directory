/* Globally available styles and theme related custom classes */

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    * {
      box-sizing: border-box;
    }

    html,
    body {
      height: 100%;
      background-color: ${({ theme }) => theme.background};
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif !important;
      scrollbar-gutter: stable;
      -moz-osx-font-smoothing: grayscale;
      min-height: 100vh;
    }

    /* Theme related custom classes */

    .themed {
      &-modal {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.color};
      }
    }
    `;
