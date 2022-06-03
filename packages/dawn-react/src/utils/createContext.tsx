import { createContext as reactCreateContext, useContext as reactUseContext, ReactNode, useMemo } from "react";

export const createContext = <ContextValueType extends object>(rootComponentName: string) => {
  const Context = reactCreateContext<ContextValueType>(null as any);

  const Provider = (props: ContextValueType & { children: ReactNode }) => {
    const { children, ...providerProps } = props;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const value = useMemo(() => providerProps, Object.values(providerProps)) as ContextValueType;
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  const useContext = (consumerName: string, useError = true) => {
    const context = reactUseContext(Context);
    if (context === null && useError) {
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return context;
  };

  return [Provider, useContext] as const;
};
