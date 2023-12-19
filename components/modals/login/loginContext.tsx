"use client";
import * as React from "react";
import { useState, useContext } from "react";
import { LoginModalPortal } from "./loginModal";

interface ModalContextProps {
  active: boolean;
  toggleModal: () => void;
}

export const ModalContext = React.createContext<ModalContextProps | undefined>(
  undefined
);

export const LoginContext = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState(false);

  const toggleModal = () => {
    setActive((prevActive) => !prevActive);
  };

  return (
    <ModalContext.Provider value={{ active, toggleModal }}>
      <LoginModalPortal setDefaultActive={setActive} defaultActive={active} />
      {children}
    </ModalContext.Provider>
  );
};
