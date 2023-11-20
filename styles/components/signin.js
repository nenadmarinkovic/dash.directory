import styled from 'styled-components';

export const SignForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;

  &:first-of-type {
    margin-top: 0;
  }

  input {
    color: ${({ theme }) => theme.textMuted};
    border: 1px solid rgba(200, 200, 200, 0.4) !important;
  }

  button {
    display: flex;
    line-height: 1;
    margin-left: auto;

    @media (max-width: 560px) {
      width: 100%;
    }
  }
`;

export const SignButtons = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
  padding: 20px 0;

  .button-add {
    background-color: ${({ theme }) => theme.primary};
  }

  .button-cancel {
    background-color: transparent;
    border: 1px solid rgba(200, 200, 200, 0.4) !important;
    color: ${({ theme }) => theme.color};

    &:not([disabled]):hover {
      background-color: ${({ theme }) => theme.hoverButton};
    }
  }
`;
