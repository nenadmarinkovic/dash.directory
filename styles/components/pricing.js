import styled from "styled-components";

export const PricingCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 3.5rem;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const PricingCard = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.clear};
  width: 43.5%;
  border-radius: 5px;
  padding: 2.8rem;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.shadowBorder},
    0 4px 6px rgba(0, 0, 0, 0.04);

  @media (max-width: 960px) {
    width: 100%;
    margin-top: 1.5rem;
    padding: 1.5rem;
  }
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
  margin: 7.5rem 12rem;

  @media (max-width: 960px) {
    margin: 3.5rem 0;
  }
`;
