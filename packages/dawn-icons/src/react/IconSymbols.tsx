import { Typography } from "@tknf/dawn";
import { resolveSymbolId } from "./utils";

export type IconSymbolsProps = {
  children?: React.ReactElement | React.ReactElement[];
};

export const IconSymbols = ({ children }: IconSymbolsProps) => {
  return (
    <Typography.VisuallyHidden extend>
      <div id="di-Symbols">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" focusable="false">
          {children}
        </svg>
      </div>
    </Typography.VisuallyHidden>
  );
};

export function CrossSymbol() {
  return (
    <symbol id={resolveSymbolId("Cross")}>
      <path
        d="M18.35 6.35L17.65 5.65L12 11.29L6.34999 5.65L5.64999 6.35L11.29 12L5.66999 17.62L6.37999 18.33L12 12.71L17.65 18.35L18.35 17.65L12.71 12L18.35 6.35Z"
        fill="currentColor"
      />
    </symbol>
  );
}

export function HamburgerSymbol() {
  return (
    <symbol id={resolveSymbolId("Hamburger")}>
      <path d="M18.25 5.5H5.75V6.5H18.25V5.5Z" fill="currentColor" />
      <path d="M18.25 17.5H5.75V18.5H18.25V17.5Z" fill="currentColor" />
      <path d="M18.25 11.5H5.75V12.5H18.25V11.5Z" fill="currentColor" />
    </symbol>
  );
}

export function InfoSymbol() {
  return (
    <symbol id={resolveSymbolId("Info")}>
      <path
        d="M13.83 4.5H10.16C7.03999 4.5 4.48999 7.04 4.48999 10.17V13.84C4.48999 16.96 7.02999 19.51 10.16 19.51H13.83C16.95 19.51 19.5 16.97 19.5 13.84V10.17C19.5 7.05 16.96 4.5 13.83 4.5V4.5ZM18.5 13.83C18.5 16.4 16.41 18.5 13.83 18.5H10.16C7.58999 18.5 5.48999 16.41 5.48999 13.83V10.16C5.48999 7.59 7.57999 5.49 10.16 5.49H13.83C16.4 5.49 18.5 7.58 18.5 10.16V13.83Z"
        fill="currentColor"
      />
      <path d="M10.88 10.01L11.32 13.37H12.68L13.12 10.01V7.9H10.88V10.01Z" fill="currentColor" />
      <path d="M13.12 13.86H10.88V16.1H13.12V13.86Z" fill="currentColor" />
    </symbol>
  );
}
