import styled from "styled-components";

export const FooterWrap = styled.footer`
  background-color: ${({ theme }) => theme.dimmed};
  border-top: 0.5px solid rgba(200, 200, 200, 0.38);
  margin-top: 12.5rem;
  height: 400px;
`;

export const FooterInside = styled.div`
  padding: 2.5rem 0;
  height: 100%;
`;

export const FooterFlex = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
