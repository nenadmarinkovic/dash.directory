import React from "react";

import { Pane, Dialog, Button } from "evergreen-ui";

export default function Modal() {
  const [isShown, setIsShown] = React.useState(false);

  return (
    <Pane>
      <Dialog
        isShown={isShown}
        title="Dialog title"
        containerProps={{ className: "themed-modal" }}
        onCloseComplete={() => setIsShown(false)}
        confirmLabel="Delete"
      >
        Are you sure you want to delete this item?
      </Dialog>
      <Button className="custom-theme" onClick={() => setIsShown(true)}>Show Dialog</Button>
    </Pane>
  );
}
