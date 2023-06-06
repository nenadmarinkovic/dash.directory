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

    a {
      color: #3faeff;
      font-weight: bold;
      text-decoration: none;
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

        &:not([disabled]):hover {
          background-color: ${({ theme }) => theme.buttonColor};
          color: #000;
        }
      }
    }

     /* Framer animation */

    .container-animation {
      height: 300vh;

      @media (max-width: 1560px) {
        height: 650vh;
      }
     }

    .motion-progress {
      position: fixed;
      z-index: 1;
      width: 100%;
      height: 4px;
      top: 0;
      left: 0;
    }

    .motion-progress > div {
      width: 100%;
      height: 100%;
    }

    .sticky-wrapper {
      position: sticky;
      top: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      overflow: hidden;
    }

    .carousel {
      display: flex;
      gap: 48px;
      margin-top: 3.5rem;
    }

    .carousel-slide {
      background-color: ${({ theme }) => theme.dimmed};
      color: ${({ theme }) => theme.color};
      border: 0.5px solid rgba(200, 200, 200, 0.38);
      width: 300px;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
    }

    .carousel-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 3rem;

      span {
        text-align: center;
        margin-top: 10px;
      }

      svg {
        width: 35px;
        height: 35px;
      }
    }
`;
