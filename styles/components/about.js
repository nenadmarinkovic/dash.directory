import styled from "styled-components";

export const AboutWrap = styled.section`
  flex: 1;
`;

export const AboutFlex = styled.main`
  margin-top: 3.5rem;
  background: ${({ theme }) => theme.background};
  display: flex;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const AboutSmall = styled.div`
  background: ${({ theme }) => theme.clear};
  width: 48%;
  border-radius: 5px;
  padding: 2.8rem;
  border: 0.5px solid rgba(200, 200, 200, 0.38);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 3px 24px;

  @media (max-width: 960px) {
    width: 100%;
    margin-top: 1.5rem;
    padding: 1.5rem;
  }
`;

export const AboutFull = styled.div`
  margin-top: 2.7rem;
  background: ${({ theme }) => theme.clear};
  width: 100%;
  border-radius: 5px;
  padding: 2.8rem;
  border: 0.5px solid rgba(200, 200, 200, 0.38);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 3px 24px;

  p {
    width: 70%;

    @media (max-width: 960px) {
      width: 100%;
    }
  }

  @media (max-width: 960px) {
    padding: 1.5rem;
  }
`;

export const AboutTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2.75rem 12rem 0 12rem;

  h2 {
    margin-left: 1rem;
  }

  @media (max-width: 960px) {
    margin: 1.75rem 0;
  }
`;

export const AboutItems = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
`;

export const AboutItem = styled.div`
  margin-top: 1rem;
  padding: 1.2rem 0;
  border-bottom: 0.5px solid rgba(200, 200, 200, 0.38);
`;

export const AboutTitleFlex = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
