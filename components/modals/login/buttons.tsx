"use client";
import Button from "@/components/button";
import { AppendCookie } from "@/utils/cookieHelpers";
import { InitPocketbase } from "@/utils/pocketbase";
import { revalidateHelperTag } from "@/utils/revalidateLocalTag";
import { SiDiscord, SiGithub, SiGoogle } from "@icons-pack/react-simple-icons";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function GoogleLogin({
  setter,
  loginToDash,
}: {
  setter: Function;
  loginToDash: boolean;
}) {
  const router = useRouter();
  return (
    <Button
      onClick={async () => {
        const pb = InitPocketbase();
        await pb.collection("users").authWithOAuth2({
          provider: "google",
        });
        try {
          const res = await pb.collection("users").authRefresh();
          await AppendCookie("token", res.token);
          toast.success("Logged in successfully!");
          setter(false);
          revalidateHelperTag("loginUpdate");
          router.refresh();

          if (loginToDash) router.push("/dashboard");
        } catch (e) {
          console.log(e);
          toast.error("Login failed!");
        }
      }}
      className=" w-[250px] flex flex-row items-center justify-center gap-5"
    >
      LOGIN WITH GOOGLE <SiGoogle size={20} />
    </Button>
  );
}
export function GithubLogin({
  setter,
  loginToDash,
}: {
  setter: Function;
  loginToDash: boolean;
}) {
  const router = useRouter();
  return (
    <Button
      onClick={async () => {
        const pb = InitPocketbase();
        await pb.collection("users").authWithOAuth2({
          provider: "github",
        });
        try {
          const res = await pb.collection("users").authRefresh();
          await AppendCookie("token", res.token);
          toast.success("Logged in successfully!");
          setter(false);
          revalidateHelperTag("loginUpdate");
          router.refresh();
          if (loginToDash) router.push("/dashboard");
        } catch (e) {
          console.log(e);
          toast.error("Login failed!");
        }
      }}
      className=" w-[250px] flex flex-row items-center justify-center gap-5"
    >
      LOGIN WITH GITHUB <SiGithub size={20} />
    </Button>
  );
}
export function DiscordLogin({
  setter,
  loginToDash,
}: {
  setter: Function;
  loginToDash: boolean;
}) {
  const router = useRouter();
  return (
    <Button
      onClick={async () => {
        const pb = InitPocketbase();
        await pb.collection("users").authWithOAuth2({
          provider: "discord",
        });
        try {
          const res = await pb.collection("users").authRefresh();
          await AppendCookie("token", res.token);
          toast.success("Logged in successfully!");
          setter(false);
          revalidateHelperTag("loginUpdate");
          router.refresh();
          if (loginToDash) router.push("/dashboard");
        } catch (e) {
          console.log(e);
          toast.error("Login failed!");
        }
      }}
      className=" w-[250px] flex flex-row items-center justify-center gap-5"
    >
      LOGIN WITH DISCORD <SiDiscord size={20} />
    </Button>
  );
}
/*
 
        <Button className=" w-[250px] flex flex-row items-center justify-center gap-5">
          LOGIN WITH GITHUB <SiGithub size={20} />
        </Button>
        <Button className=" w-[250px] flex flex-row items-center justify-center gap-5">
          LOGIN WITH DISCORD <SiDiscord size={20} />
        </Button>
*/
