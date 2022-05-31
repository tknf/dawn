import { useLayoutEffect as reactUseLayoutEffect } from "react";

export const useLayoutEffect = globalThis?.document ? reactUseLayoutEffect : () => {};
