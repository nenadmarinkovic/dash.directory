import React from "react";

import { Pane, Dialog, Button } from "evergreen-ui";

export default function Modal() {
  const [isShown, setIsShown] = React.useState(false);

  return (
    <Pane>
      <Dialog
        isShown={isShown}
        title="Login"
        containerProps={{ className: "themed-modal" }}
        onCloseComplete={() => setIsShown(false)}
        confirmLabel="Join"
      >
        Are you ready to join?
      </Dialog>
      <Button className="custom-theme" onClick={() => setIsShown(true)}>
        Login
      </Button>
    </Pane>
  );
}
