import styled from "styled-components";

export const SidebarWrap = styled.nav`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

export const SidebarItems = styled.ul`
  margin-top: -2px;
`;

export const SidebarItem = styled.li`
  margin-top: 30px;
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
    transition: .3s;
  }

  svg {
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }

  :hover {
    background: ${({ theme }) => theme.hoverButton};
  }
`;
