import { createContext } from "../../utils";

export interface AppProviderConfig {
  idPrefix?: string;
}

export const [AppProvider, useAppContext] = createContext<AppProviderConfig>("AppContext");
