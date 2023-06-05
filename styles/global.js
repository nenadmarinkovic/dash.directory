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
  
   /* Banner animation */

    #part1, #part2, #part3 {
      position: absolute;
      animation-name: bounce;
      animation-duration: 1s;
      top: 50px;
      animation-timing-function: ease-in-out;
      opacity: 0;
      animation-fill-mode: forwards;
    }

    #part3 {
      animation-delay: 0s;
    }

    #part2 {
      animation-delay: 0.35s;
    }

    #part1 {
      animation-delay: 0.75s;
    
    }

    @keyframes bounce {
      0% {
        transform: translateY(50px);
      }

      50% {
        transform: translateY(0);
      }

      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }

    /* Theme */

    .themed {
      &-modal {
        background-color: ${({ theme }) => theme.background};

        h4 {
          color: ${({ theme }) => theme.color};
        }
      }

      &-button {
        background-color: ${({ theme }) => theme.buttonBackground};
        color: ${({ theme }) => theme.buttonColor};
        transition: .3s;

        :not([disabled]):hover {
          background:   ${({ theme }) => theme.buttonColor};
          color: ${({ theme }) => theme.buttonBackground};
        }
      }
    }
    `;
