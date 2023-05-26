import styled from "styled-components";

export const PanelWrap = styled.section`
  flex: 1;
  padding-bottom: 5.5rem;
`;

export const PanelFlex = styled.main`
  margin-top: 3.5rem;
  background: ${({ theme }) => theme.background};
  display: flex;
  justify-content: space-between;

`;

export const PanelSmall = styled.div`
  background: ${({ theme }) => theme.dimmed};
  width: 48%;
  border-radius: 5px;
  padding: 2.8rem;
  height: 500px;
  border: 0.5px solid rgba(200, 200, 200, 0.38);
`;

export const PanelFull = styled.div`
  margin-top: 3rem;
  background: ${({ theme }) => theme.dimmed};
  width: 100%;
  border-radius: 5px;
  padding: 2.8rem;
  height: 200px;
  border: 0.5px solid rgba(200, 200, 200, 0.38);
`;

export const PanelTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 12rem;

  h2 {
    margin-left: 1rem;
  }
`;
