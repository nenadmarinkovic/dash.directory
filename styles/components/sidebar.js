import styled from 'styled-components'

export const SidebarWrap = styled.nav`
  display: flex;
  flex-direction: column;
  width: 20%;
`

export const SidebarItems = styled.ul`
  margin-top: -2.5px;
`

export const SidebarItem = styled.li`
  margin-top: 27.5px;
  transition: 0.3s;
  display: block;

  &:first-of-type {
    margin-top: 0;
  }

  a {
    display: flex;
    align-items: center;
    padding: 10px;
    max-width: 180px;
    border-radius: 5px;
    transition: 0.3s;
  }

  svg {
    width: 23px;
    height: 23px;
    margin-right: 5px;
  }

  :hover {
    background: ${({ theme }) => theme.hoverButton};
  }
`
