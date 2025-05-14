import { useContext } from "react";
import { ModalContext, ModalContextType } from "./ModalProvider";

export const useModalProvider = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};
