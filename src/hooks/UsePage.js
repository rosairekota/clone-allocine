import { useState } from "react";

export const UsePage = (defaultValue) => {
  const [state, setState] = useState(defaultValue);

  const mutateState = (value) => {
    setState(value);
  };
  return [state, mutateState];
};
