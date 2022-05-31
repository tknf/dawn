import { createContext as reactCreateContext, useContext as reactUseContext, ReactNode, useMemo } from "react";

export const createContext = <ContextValueType extends object>(rootComponentName: string) => {
  const Context = reactCreateContext<ContextValueType>(null as any);

  const Provider = (props: ContextValueType & { children: ReactNode }) => {
    const { children, ...providerProps } = props;
    const value = useMemo(() => providerProps, Object.values(providerProps)) as ContextValueType;
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  const useContext = (consumerName: string) => {
    const context = reactUseContext(Context);
    if (context === null) {
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return context;
  };

  Provider.displayName = `${rootComponentName}Provider`;
  return [Provider, useContext] as const;
};
