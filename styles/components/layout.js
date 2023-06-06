import styled from "styled-components";

export const MainSection = styled.section`
  flex: 1;
`;

export const ThemeLayout = styled.main`
  background: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContainerWrap = styled.div`
  margin: 0 auto;
  max-width: 75.8rem;
  width: 100%;
  padding: 0 15px;

  @media (max-width: 25rem) {
    max-width: 100%;
  }
`;
