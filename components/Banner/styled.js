import styled from "styled-components";

export const BannerWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BannerItem = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: end;

  svg {
    width: 98%;
  }
`;

export const BannerText = styled.div`
  margin-top: 7.5rem;
`;
