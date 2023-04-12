import React from "react";
import { Menu, MenuTrigger, ActionButton, Item } from "@adobe/react-spectrum";

function Header() {
  return (
   
      <MenuTrigger>
        <ActionButton>Edit</ActionButton>
        <Menu>
          <Item key="cut">RRR</Item>
          <Item key="copy">Copy</Item>
          <Item key="paste">Paste</Item>
          <Item key="replace">Replace</Item>
        </Menu>
      </MenuTrigger>
   
  );
}

export default Header;
