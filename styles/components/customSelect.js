import styled from 'styled-components'

export const CustomOptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border-top: none;
  border-radius: 0 0 4px 4px;
  overflow: hidden;
  z-index: 1;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.shadowBorder},
    0 4px 6px rgba(0, 0, 0, 0.04);
`

export const CustomSelectContainer = styled.div`
  position: relative;
  width: 200px;
  font-size: 16px;
  margin: 0 10px;
`

export const CustomSelectButton = styled.button`
  padding: 8px;
  width: 100%;
  font-size: 12px;
  font-weight: 500;
  text-align: left;
  background: ${({ theme }) => theme.clear};
  color: ${({ theme }) => theme.textMuted};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  border: 1px solid rgba(200, 200, 200, 0.4);

  svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.textMuted};
  }

  &:hover {
    background: ${({ theme }) => theme.hoverButton};
  }

  &:focus {
    box-shadow: 0 0 0 2px #d6e0ff;
  }
`

export const CustomOption = styled.div`
  padding: 10px;
  font-size: 13px;
  background: ${({ theme }) => theme.clear};
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.hoverButton};
  }
`
