import * as React from "react";
import { Extend } from "./Extend";

export type IconSource =
  | React.ForwardRefExoticComponent<any & React.ElementRef<typeof Extend.svg>>
  | React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  | "placeholder"
  | string;
