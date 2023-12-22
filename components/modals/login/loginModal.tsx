"use client";
import { createPortal } from "react-dom";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Button from "../../button";
import { SiDiscord, SiGithub, SiGoogle } from "@icons-pack/react-simple-icons";
import { DiscordLogin, GithubLogin, GoogleLogin } from "./buttons";

function LoginModal({
  setActive,
  active,
  loginToDash,
}: {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  active: boolean;
  loginToDash: boolean;
}) {
  const modal = useRef<HTMLDivElement>(null);
  const closeOpenMenus = (e: any) => {
    if (modal.current && active && !modal.current.contains(e.target)) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <div
      className={`${
        active ? "translate-y-0 " : "-translate-y-full "
      } ease-menu-ease duration-500 transition-all w-full h-[100svh] fixed top-0 z-[999] flex flex-col items-center justify-center left-0 bg-background bg-opacity-60 backdrop-blur-md`}
    >
      <div
        ref={modal}
        className={`${
          active ? "scale-100 translate-y-0 " : "scale-50 translate-y-40 "
        }w-[90%] md:w-[700px] flex flex-col items-center justify-center gap-8 p-3 h-[400px] rounded-md bg-black ease-menu-ease duration-500 transition-all delay-300`}
      >
        <GoogleLogin loginToDash={loginToDash} setter={setActive} />
        <GithubLogin loginToDash={loginToDash} setter={setActive} />
        <DiscordLogin loginToDash={loginToDash} setter={setActive} />
      </div>
    </div>
  );
}

export function LoginModalPortal({
  defaultActive,
  setDefaultActive,
  loginToDash,
}: {
  defaultActive: boolean;
  setDefaultActive: React.Dispatch<React.SetStateAction<boolean>>;
  loginToDash: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const [active, setActive] = useState(defaultActive);
  useEffect(() => {
    setActive(defaultActive);
  }, [defaultActive]);
  useEffect(() => {
    if (document.body) {
      if (active) {
        document.body.style.overflow = "hidden";
        setLoaded(true);
      } else {
        document.body.style.overflow = "auto";
        setLoaded(true);
        setDefaultActive(false);
      }
    }
  }, [active, setDefaultActive]);

  return loaded
    ? createPortal(
        <LoginModal
          loginToDash={loginToDash}
          setActive={setActive}
          active={active}
        />,
        document.body
      )
    : null;
}
