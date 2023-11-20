import styled from 'styled-components';

export const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  text-align: center;
  line-height: 30px;
  font-size: 1rem;
  font-weight: bold;
`;

export const Line = styled.div`
  width: 1px;
  height: 120px;
  background: rgb(0, 0, 0);
  background: ${({ theme }) => theme.lineBackground};

  @media (max-width: 960px) {
    height: 80px;
  }
`;

export const SpinnerWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 20px;
`;

export const AlertWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 10px;
`;

export const NotFound = styled.div`
  margin: 5.5rem 0;
  text-align: center;
`;
