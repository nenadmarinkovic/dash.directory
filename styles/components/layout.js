import styled from "styled-components";

export const MainSection = styled.section`
  flex: 1;
`;

export const ThemeLayout = styled.div`
  background: ${({ theme }) => theme.background};
  min-height: 95vh;
  display: flex;
  flex-direction: column;
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

  @media (max-width: 960px) {
    margin: 3.5rem 0;
  }
`;

export const CenteredLayout = styled.div`
  text-align: center;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
