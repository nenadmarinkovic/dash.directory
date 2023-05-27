import styled from "styled-components";

export const CardsWrap = styled.section`
  flex: 1;
  padding-bottom: 5.5rem;
`;

export const CardsFlex = styled.main`
  margin-top: 3.5rem;
  background: ${({ theme }) => theme.background};
  display: flex;
  justify-content: space-between;
`;

export const CardsSmall = styled.div`
  background: ${({ theme }) => theme.dimmed};
  width: 48%;
  border-radius: 5px;
  padding: 2.8rem;
  border: 0.5px solid rgba(200, 200, 200, 0.38);
`;

export const CardsFull = styled.div`
  margin-top: 2.5rem;
  background: ${({ theme }) => theme.dimmed};
  width: 100%;
  border-radius: 5px;
  padding: 2.8rem;
  border: 0.5px solid rgba(200, 200, 200, 0.38);
`;

export const CardsTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 12rem;

  h2 {
    margin-left: 1rem;
  }
`;

export const CardItems = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
`;

export const CardItem = styled.div`
  margin-top: 1rem;
  padding: 1.2rem 0;
  border-bottom: 0.5px solid rgba(200, 200, 200, 0.38);
`;
