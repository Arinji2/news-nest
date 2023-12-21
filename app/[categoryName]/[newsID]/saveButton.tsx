"use client";
import SaveArticleAction from "@/components/article/SaveAction";
import Button from "@/components/button";
import { useLoginModal } from "@/components/modals/login/useLoginModal";
import { GetCookie, HasCookie } from "@/utils/cookieHelpers";
import { InitPocketbase } from "@/utils/pocketbase";
import { NewsItemType, SavedItemType } from "@/utils/types";
import { Loader2 } from "lucide-react";
import * as React from "react";
import { useState } from "react";

export default function SaveButton({
  saved,
  articleData,
  category,
}: {
  saved: boolean | null;
  articleData: NewsItemType;
  category: string;
}) {
  const [loading, setLoading] = useState(false);
  const [savedState, setSavedState] = useState(saved ?? false);
  const { toggleModal } = useLoginModal();
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
            savedState ?? false,
            articleData,
            category
          );
          if (newSavedValue === null) toggleModal();
          else setSavedState(newSavedValue);
          setLoading(false);
        } catch (e) {
          toggleModal();
          setLoading(false);
          return;
        }
      }}
    >
      <Button
        inverse
        className="w-[165px] h-[52px] flex flex-col items-center justify-center"
      >
        {loading ? (
          <Loader2 className="animate-spin" />
        ) : savedState ? (
          "DELETE ARTICLE"
        ) : (
          "SAVE ARTICLE"
        )}
      </Button>
    </button>
  );
}
