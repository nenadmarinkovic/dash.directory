import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    * {
      box-sizing: border-box;
    }

    html,
    body {
      height: 100%;
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif !important;
      scrollbar-gutter: stable;
      -moz-osx-font-smoothing: grayscale;
      min-height: 100vh;
      padding: 115px;
    }

    h1 {
        color: #010101;
        font-size: 81px;
        letter-spacing: -0.055em;
        line-height: 0.9em;
        text-indent: -0.03em;
        margin-bottom: 4rem;
        margin-top: 10px;
        font-weight: 740;
    }

    p {
        font-size: 15px;
        font-weight: 400;
        line-height: 22.5px;
    }
    
    `;
