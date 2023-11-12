import styled from "styled-components";

export const SignForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignField = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  &:first-of-type {
    margin-top: 0;
  }

  button {
    display: block;
    width: 120px;
    line-height: 1;

    @media (max-width: 560px) {
      width: 100%;
    }
  }
`;
