import styled from "styled-components";

export const FooterWrap = styled.footer`
  background-color: ${({ theme }) => theme.background};
  border-top: 1px solid rgba(200, 200, 200, 0.38);
  margin-top: 3.75rem;
`;

export const FooterInside = styled.div`
  padding: 1.75rem 0;
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
    justify-items: center;
  }
`;

export const FooterFlex = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  &.links {
    margin-top: -3px;

    a {
      color: inherit;
      font-weight: inherit;
    }

    @media (max-width: 960px) {
      margin-top: 1.5rem !important;
    }
  }

  @media (max-width: 960px) {
    align-items: center;
  }
`;

export const Year = styled.div`
  background-color: ${({ theme }) => theme.background};
`;

export const ContactWrap = styled.div`
  width: 320px;
  margin-top: 20px;
  line-height: 1.5;

  .email {
    color: #3faeff !important;
    font-weight: bold !important;
    text-decoration: none;
  }

  @media (max-width: 960px) {
    text-align: center;
  }
`;
