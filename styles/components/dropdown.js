import styled from 'styled-components';

export const DropdownContainer = styled.div`
  display: inline-block;
  position: relative;
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
  position: fixed;
  top: ${(props) => props.$top}px;
  left: ${(props) => props.$left - 100}px;
  border-radius: 4px;
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  flex-direction: column;
  background-color: ${({ theme }) => theme.clear};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.shadowBorder}, 0 4px 6px rgba(0, 0, 0, 0.04);
  z-index: 10;

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
      color: ${({ theme }) => theme.danger};
    }
  }
`;
