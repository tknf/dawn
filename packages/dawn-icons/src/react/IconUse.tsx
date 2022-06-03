import { FunctionComponent } from "react";
import { resolveSymbolId } from "./utils";

export const IconUse: FunctionComponent<{
  id: string;
}> = ({ id }) => {
  return <use xlinkHref={`#${resolveSymbolId(id)}`} />;
};
