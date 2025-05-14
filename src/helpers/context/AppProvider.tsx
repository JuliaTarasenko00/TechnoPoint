import React from "react";
import { ModalProvider } from "./ModalProvider/ModalProvider";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <ModalProvider>{children}</ModalProvider>;
};
