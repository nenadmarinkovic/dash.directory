import styled from "styled-components";

export const BannerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 7.5rem;

  @media (max-width: 960px) {
    flex-direction: column;
    padding-top: 1.5rem;
  }
`;

export const BannerItem = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: end;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const BannerText = styled.div`
  margin-top: 1.5rem;
`;
