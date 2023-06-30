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
  height: 100%;
  padding: 0 15px;

  @media (max-width: 25rem) {
    max-width: 100%;
  }

  @media (max-width: 1560px) {
    max-width: 72.8rem;
  }
`;

export const CenteredSection = styled.div`
  margin: 5.5rem 12.5rem 1.5rem 12.5rem;

  @media (max-width: 25rem) {
    margin: 3.5rem 0;
  }
`;

export const CenteredLayout = styled.div`
  text-align: center;
  padding: 1.5rem 0 30% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
