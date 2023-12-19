"use client";
import { useContext } from "react";
import { ModalContext } from "./loginContext";
export const useLoginModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
};
