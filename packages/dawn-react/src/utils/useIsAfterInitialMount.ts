import * as React from "react";

export function useIsAfterInitialMount() {
  const [isAfterInitialMount, setIsAfterInitialMount] = React.useState(false);

  React.useEffect(() => {
    setIsAfterInitialMount(true);
  }, []);

  return isAfterInitialMount;
}
