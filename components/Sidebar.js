import React from "react";
import DateTimeComponent from "./DateTime";
import {
  SidebarWrap,
  SidebarItem,
  SidebarItems,
} from "../styles/components/sidebar";
import { Text } from "evergreen-ui";
import Link from "next/link";

function Sidebar({ theme }) {
  let textColor = theme === "light" ? "#000" : "#F8FAFF";
  let textMuted = theme === "light" ? "#676f89" : "#8B93A8";
  return (
    <>
  
      <SidebarWrap>
      <DateTimeComponent />
        <SidebarItems>
          <SidebarItem>
            <Link href="/i/bookmarks">
              <Text color={textColor}>Bookmarks</Text>
            </Link>
          </SidebarItem>
          <SidebarItem>
            <Link href="/i/tasks">
              <Text color={textColor}>Tasks</Text>
            </Link>
          </SidebarItem>
          <SidebarItem>
            <Link href="/i/events">
              <Text color={textColor}>Events</Text>
            </Link>
          </SidebarItem>
          <SidebarItem>
            <Link href="/i/notes">
              <Text color={textColor}>Notes</Text>
            </Link>
          </SidebarItem>
          <SidebarItem>
            <Link href="/settings">
              <Text color={textColor}>Settings</Text>
            </Link>
          </SidebarItem>
        </SidebarItems>
      </SidebarWrap>
    </>
  );
}

export default Sidebar;
