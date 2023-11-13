import styled from "styled-components";

export const StartMenuWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StartMenuItem = styled.div`
  width: 48%;
  margin-top: 2.7rem;
  background: ${({ theme }) => theme.clear};
  border-radius: 5px;
  padding: 2.8rem;
  cursor: pointer;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.shadowBorder},
    0 4px 6px rgba(0, 0, 0, 0.04);

  @media (max-width: 47.95rem) {
    width: 100%;
  }
`;

export const StartMenuTitle = styled.div`
  display: flex;
`;

export const StartMenuLogo = styled.div`
  width: 40px;
  margin-right: 10px;
`;
