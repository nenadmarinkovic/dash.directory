import styled from 'styled-components';

export const SidebarWrap = styled.nav`
  display: flex;
  flex-direction: column;
  width: 20%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SidebarItems = styled.ul`
  position: relative;
  left: -12px;
`;

export const SidebarItem = styled.li`
  margin-top: 27.5px;
  display: block;
  transition: 0.15s;

  &:first-of-type {
    margin-top: 0;
  }

  a {
    display: flex;
    align-items: center;
    padding: 7.5px 10px;
    max-width: 180px;
    border-radius: 5px;

    &.active-sidebar-link {
      background-color: ${({ theme }) => theme.hoverButton};
    }

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.textColor};
      font-weight: 400;
    }
  }

  svg {
    width: 23px;
    height: 23px;
    margin-right: 5px;
  }

  :hover {
    background: ${({ theme }) => theme.hoverButton};
  }
`;
