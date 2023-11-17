import styled from 'styled-components'

export const StartMenuWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  a {
    width: 48%;
    margin-top: 2.7rem;
    background: ${({ theme }) => theme.clear};
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.shadowBorder},
      0 4px 6px rgba(0, 0, 0, 0.04);

    &:hover {
      background: ${({ theme }) => theme.hoverButton};
    }

    @media (max-width: 47.95rem) {
      width: 100%;
    }
  }
`

export const StartMenuText = styled.div`
  padding: 0 1.5rem 1.5rem 1.5rem;
`

export const StartMenuTitle = styled.div`
  display: flex;
  padding: 1.5rem 1.5rem 0.5rem 1.5rem;
`

export const StartMenuLogo = styled.div`
  width: 40px;
  margin-right: 10px;
`
