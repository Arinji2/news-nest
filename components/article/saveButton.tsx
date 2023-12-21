"use client";
import { GetCookie, HasCookie } from "@/utils/cookieHelpers";
import { InitPocketbase } from "@/utils/pocketbase";
import { NewsItemType } from "@/utils/types";
import { FolderPlus, FolderX, Loader2 } from "lucide-react";

import { useLoginModal } from "../modals/login/useLoginModal";
import SaveArticleAction from "./SaveAction";
import { useState } from "react";

export default function SaveButton({
  saved,
  article,
  category,
  setSaved,
}: {
  saved: boolean | undefined;
  article: NewsItemType;
  category: string;
  setSaved: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { toggleModal, active } = useLoginModal();
  const [loading, setLoading] = useState(false);

  return (
    <button
      className="w-fit h-fit"
      onClick={async () => {
        setLoading(true);
        const res = await HasCookie("token");

        if (!res) {
          toggleModal();
          setLoading(false);
          return;
        }
        const pb = InitPocketbase();
        const token = await GetCookie("token");

        if (!token) {
          toggleModal();
          setLoading(false);
          return;
        }
        pb.authStore.save(token);
        try {
          await pb.collection("users").authRefresh();
          const newSavedValue = await SaveArticleAction(
            saved ?? false,
            article,
            category
          );
          if (newSavedValue === null) toggleModal();
          else setSaved(newSavedValue);
          setLoading(false);
        } catch (e) {
          toggleModal();
          setLoading(false);
          return;
        }
      }}
    >
      {loading ? (
        <Loader2 className="w-6 h-6 text-accent animate-spin" />
      ) : saved ? (
        <FolderX className="w-6 h-6 text-accent" />
      ) : (
        <FolderPlus className="w-6 h-6 text-accent" />
      )}
    </button>
  );
}
