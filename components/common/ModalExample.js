import React from "react";
import styled from "styled-components";
import { Button, Modal } from "semantic-ui-react";

import "semantic-ui-css/components/modal.min.css";
import "semantic-ui-css/components/dimmer.min.css";

const StyledButton = styled(Button)`
  &&& {
    background-color: #eaeaea;
    color: black;
    font-family: inherit;
    font-size: .75rem;
    margin-left: 0.25rem;
  }

`;

function exampleReducer(state, action) {
  switch (action.type) {
    case "close":
      return { open: false };
    case "open":
      return { open: true, size: action.size };
    default:
      throw new Error("Unsupported action...");
  }
}

const ModalExample = () => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  });
  const { open, size } = state;

  return (
    <>
      <StyledButton onClick={() => dispatch({ type: "open", size: "mini" })}>
        Mini
      </StyledButton>

      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: "close" })}
      >
        <Modal.Header>Delete Your Account</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete your account</p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: "close" })}>
            No
          </Button>
          <Button positive onClick={() => dispatch({ type: "close" })}>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default ModalExample;
