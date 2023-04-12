import React from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";

const MyPopup = styled(Button)`
  &&& {
    background-color: black;
    color: white;
  }
`;

const ButtonExample = () => <MyPopup>Click Here</MyPopup>;

export default ButtonExample;
