import React from "react";

import { Pane, Dialog, Button } from "evergreen-ui";

export default function Test() {
  const [isShown, setIsShown] = React.useState(false);

  return (
    <Pane>
      <Dialog
        isShown={isShown}
        title="Dialog title"
        containerProps={{className: "custom-modal"}}
        onCloseComplete={() => setIsShown(false)}
        confirmLabel="Delete"
      >
        Are you sure you want to delete this item?
      </Dialog>

      <Button
        color="yellow"
        backgroundColor="black"
        onClick={() => setIsShown(true)}
      >
        Show Dialog
      </Button>
    </Pane>
  );
}
