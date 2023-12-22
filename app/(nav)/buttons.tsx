"use client";

import Button from "@/components/button";
import { useLoginModal } from "@/components/modals/login/useLoginModal";

export function LoginButton() {
  const { toggleModal } = useLoginModal();
  return (
    <Button
      onClick={async () => {
        toggleModal(true);
      }}
      textOnly
    >
      LOGIN
    </Button>
  );
}
