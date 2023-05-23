import styled from "styled-components";

export const HeaderWrap = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 0px 0.75rem 0;
  backdrop-filter: saturate(70%) blur(3px);
  z-index: 2;
  contain: layout;
  border-bottom: 0.5px solid rgba(200, 200, 200, 0.38);
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
  width: 50%;
  margin-bottom: 3px;

  @media (max-width: 47.95rem) {
    display: none;
  }
`;

export const HeaderLink = styled.div`
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

export const ThemeButton = styled.button`
  padding: 1.5px;
  background: transparent;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
`;
