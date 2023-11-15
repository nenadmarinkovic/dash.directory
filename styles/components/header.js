import styled from "styled-components";

export const HeaderWrap = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 0px 0.75rem 0;
  background: ${({ theme }) => theme.headerBackground};
  backdrop-filter: saturate(70%) blur(3px);
  z-index: 2;
  contain: layout;
  border-bottom: 1px solid rgba(200, 200, 200, 0.38);
`;

export const HeaderMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;

  @media (max-width: 47.95rem) {
    display: none;
  }
`;

export const HeaderLink = styled.div`
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-right: 2.5rem;

  &.no-pointer {
    cursor: text;
  }
`;

export const ThemeButton = styled.span`
  padding: 1.5px;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  margin-right: 2.5rem;
`;
