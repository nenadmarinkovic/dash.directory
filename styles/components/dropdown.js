import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: absolute;
  display: inline-block;
  top: 10px;
  right: 20px;
`;

export const DropdownButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none !important;
  color: ${({ theme }) => theme.textColor};

  svg {
    width: 21px;
    height: auto;
  }
`;

export const DropdownList = styled.div`
  padding: 0;
  margin: 0;
  position: absolute;
  right: 10px;
  border-radius: 4px;
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.shadowBorder}, 0 4px 6px rgba(0, 0, 0, 0.04);
  z-index: 5;

  button {
    padding: 10px;
    background-color: transparent;
    border: none !important;
    text-align: start;
    width: 120px;
    cursor: pointer;
    color: ${({ theme }) => theme.textColor};
    font-size: 13px;

    &:hover {
      background: ${({ theme }) => theme.hoverButton};
    }

    &.danger {
      color: #d50808;
    }
  }
`;
