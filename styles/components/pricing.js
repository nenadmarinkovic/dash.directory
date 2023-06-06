import styled from "styled-components";

export const PricingCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 3.5rem;
`;

export const PricingCard = styled.div`
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.dimmed};
  width: 43.5%;
  border-radius: 5px;
  padding: 2.8rem;
  border: 0.5px solid rgba(200, 200, 200, 0.38);
`;

export const PricingCardItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  svg {
    height: 30px;
    width: 30px;
    margin-right: 10px;
  }
`;

export const Money = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color};
`;

export const PricingAdditional = styled.div`
  text-align: center;
  margin: 7.5rem 12rem 0 12rem;
`;
