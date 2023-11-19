import styled from 'styled-components';

export const UpdatesWrap = styled.div`
  margin-top: 3.5rem;
  padding-bottom: 7.5rem;
`;

export const Update = styled.div`
  margin-top: 2.5rem;
  line-height: 2;
  padding: 1.8rem;
  background: ${({ theme }) => theme.clear};
  color: ${({ theme }) => theme.color};
  border-radius: 5px;
  border: 0.5px solid rgba(200, 200, 200, 0.38);
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  span {
    display: block;
    margin-top: 1rem;
  }

  @media (max-width: 960px) {
    width: 100%;
    margin-top: 1.5rem;
    padding: 1.5rem;
  }
`;
