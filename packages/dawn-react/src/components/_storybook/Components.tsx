import { CrossSymbol, HamburgerSymbol, IconSymbols, InfoSymbol } from "@tknf/dawn-icons";
import * as React from "react";

type Props = {
  children: React.ReactNode;
};

export const Title: React.FunctionComponent<Props> = ({ children }) => {
  return <h1 style={{ marginBottom: "1rem", paddingBottom: `0.5rem` }}>{children}</h1>;
};

export const Description: React.FunctionComponent<Props> = ({ children }) => {
  return <p style={{ margin: "0", color: "#333" }}>{children}</p>;
};

export const C_Header: React.FunctionComponent<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  return (
    <div style={{ marginBottom: "2rem", padding: "1rem 0", borderBottom: `1px solid #ccc` }}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </div>
  );
};

export const C_Box: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <div style={{ marginBottom: "1.5rem", padding: `1rem`, border: `1px solid #ccc`, position: "relative" }}>
      {children}
    </div>
  );
};

export const C_Main: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <main>
      {children}
      <IconSymbols>
        <CrossSymbol />
        <HamburgerSymbol />
        <InfoSymbol />
      </IconSymbols>
    </main>
  );
};
