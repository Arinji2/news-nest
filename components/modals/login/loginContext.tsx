"use client";
import * as React from "react";
import { useState } from "react";
import { LoginModalPortal } from "./loginModal";

interface ModalContextProps {
  active: boolean;
  toggleModal: (linkToDash?: boolean) => void;
}

export const ModalContext = React.createContext<ModalContextProps | undefined>(
  undefined,
);

export const LoginContext = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState(false);
  const [loginToDash, setLoginToDash] = useState(false);

  const toggleModal = (linkToDash?: boolean) => {
    setActive((prevActive) => !prevActive);

    if (linkToDash) setLoginToDash(true);
    else setLoginToDash(false);
  };

  return (
    <ModalContext.Provider value={{ active, toggleModal }}>
      <LoginModalPortal
        loginToDash={loginToDash}
        setDefaultActive={setActive}
        defaultActive={active}
      />
      {children}
    </ModalContext.Provider>
  );
};
