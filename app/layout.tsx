import { Work_Sans } from "next/font/google";
import Navbar from "./(nav)/navbar";
import "./globals.css";
import { LoginContext } from "@/components/modals/login/loginContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { unstable_cache } from "next/cache";
import { cookies } from "next/headers";

const work_Sans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "300", "400", "100", "500", "700", "900"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoggedIn = await unstable_cache(
    async () => {
      const res = cookies().has("token");
      return res;
    },

    ["cacheKey"],
    {
      tags: ["loginUpdate"],
    }
  )();
  return (
    <html lang="en" className="bg-background">
      <body className={work_Sans.className}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop
          draggable={false}
          closeOnClick
          theme="dark"
        />

        <LoginContext>
          <Navbar isLoggedIn={isLoggedIn} />

          {children}
        </LoginContext>
      </body>
    </html>
  );
}
