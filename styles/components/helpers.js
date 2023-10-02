import styled from "styled-components";

export const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #3faeff;
  color: ${({ theme }) => theme.colorInvert};
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
