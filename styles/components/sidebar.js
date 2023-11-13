import styled from "styled-components";

export const SidebarWrap = styled.nav`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin-top: 7px;
`;

export const SidebarItems = styled.ul`
  margin-top: 0.5rem;
`;

export const SidebarItem = styled.li`
  margin-top: 20px;

  span {
    color: ${({ theme }) => theme.textMuted};
  }
`;
