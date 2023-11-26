import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.background};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif !important;
    scrollbar-gutter: stable;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  ::placeholder {
    color: ${({ theme }) => theme.textMuted};
    opacity: 1;
  }

  a {
    color: ${({ theme }) => theme.primary};
    font-weight: bold;
    text-decoration: none;

    &.with-top-margin {
      margin-top: 20px;
    }
  }

  .logo-link {
    display: flex;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
    color: ${({ theme }) => theme.textMuted};
  }

  .big-header {
    @media (max-width: 960px) {
      font-size: 38px;
      margin: 2rem 0;
    }
  }

  .active-link {
    border-bottom: 1px solid ${({ theme }) => theme.muted};
  }

  /* Banner animation */

  #part1,
  #part2,
  #part3 {
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
      border: 1px solid rgba(200, 200, 200, 0.4) !important;
      transition: 0.15s;
      font-weight: bold;

      &:not([disabled]):hover {
        background-color: ${({ theme }) => theme.buttonColor};
        color: #000;
      }
    }
  }

  .custom-button-small {
    background-color: ${({ theme }) => theme.primary};
    color: white;
    width: 160px;
    display: flex;
    align-items: center;
    font-weight: 600;
    justify-content: space-between;
    border: none !important;
    height: 36px;

    svg {
      height: 18px;
      width: 18px;
      margin-left: 5px;
      display: block;
    }

    &:not([disabled]):hover {
      background-color: ${({ theme }) => theme.primaryActive};
    }

    &:hover {
      background-color: ${({ theme }) => theme.primaryActive};

      svg {
        fill: ${({ theme }) => theme.color};
      }
    }
  }

  .custom-button-big {
    svg {
      width: 25px;
      height: 25px;
      display: block;
      margin-right: 10px;
    }
  }

  /* Custom Table Component */

  .custom-table {
    &_body {
      max-height: 700px;
      overflow-y: auto;

      &.with-border-left {
        border-left: 1px solid rgba(200, 200, 200, 0.4);
      }

      &.with-min-height {
        min-height: 700px;
      }
    }

    &_head {
      padding: 0;
      border-bottom: 1px solid rgba(200, 200, 200, 0.4);

      &.add-right-padding {
        padding-right: 15px;
      }
    }
    &_cell {
      span {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }

    &_wrap {
      border: 0;
    }

    &_row {
      position: relative;
      border-bottom: 1px solid rgba(200, 200, 200, 0.4);
      background-color: ${({ theme }) => theme.clear};
    }

    &_menu {
      padding: 0;
      position: absolute;
      right: 10px;
      top: 20px;
    }

    &_link {
      color: ${({ theme }) => theme.primary};
      font-weight: bold;
    }

    &_button {
      padding: 0;
      margin-right: 15px;
      height: 28px;
      font-weight: 600;
      border: none !important;
      background-color: ${({ theme }) => theme.clear};
      color: ${({ theme }) => theme.textColor};

      svg {
        height: 18px;
        width: 18px;
        display: block;

        fill {
          color: ${({ theme }) => theme.background};
        }
      }

      &:hover {
        background-color: ${({ theme }) => theme.hoverButton} !important;
      }

      &:not([disabled])[aria-expanded='true'] {
        background-color: ${({ theme }) => theme.hoverButton};
      }
    }
  }

  .custom-icon-button,
  .category-button {
    &:hover {
      background-color: ${({ theme }) => theme.hoverButton} !important;
    }

    &:not([disabled])[aria-expanded='true'] {
      background-color: ${({ theme }) => theme.hoverButton};
    }
  }

  .done-task {
    text-decoration: line-through;
  }

  .done-task-div {
    background-color: ${({ theme }) => theme.hoverButton};
    opacity: 0.5;
  }

  /* Tasks */

  .task-container {
    min-height: 600px;
    border-top-left-radius: 4px;
    border-radius: 4px;
    display: flex;
    border: 1px solid rgba(200, 200, 200, 0.4);

    &_tabs-title {
      border-top-left-radius: 4px;
      text-transform: uppercase;
      padding: 0 12px;
      display: flex;
      align-items: center;
      height: 56px;
      background-color: ${({ theme }) => theme.background};
      border-bottom: 1px solid rgba(200, 200, 200, 0.4);
      span {
        line-height: 16px;
        letter-spacing: 0;
        color: #696f8c;
        font-size: 12px;
        font-weight: 600;
      }
    }
    &_selected {
      &:hover {
        background-color: ${({ theme }) => theme.hoverButton} !important;
      }

      &:active {
        background-color: ${({ theme }) => theme.hoverButton} !important;
      }

      &[aria-selected='true'] {
        background-color: ${({ theme }) => theme.hoverButton} !important;
      }
    }
  }

  /* Framer animation */

  .container-animation {
    height: 300vh;

    @media (max-width: 1560px) {
      height: 720vh;
    }

    @media (max-width: 960px) {
      height: unset;
    }
  }

  .select-menu {
    background-color: ${({ theme }) => theme.color};
  }

  .motion-progress {
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 3px;
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

    @media (max-width: 960px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  .carousel-slide {
    background-color: ${({ theme }) => theme.clear};
    color: ${({ theme }) => theme.color};
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.shadowBorder}, 0 4px 6px rgba(0, 0, 0, 0.04);

    @media (max-width: 960px) {
      min-width: 300px;
      height: unset;
      justify-content: center;
    }
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

    @media (max-width: 960px) {
      padding: 1.5rem;
    }
  }
`;
