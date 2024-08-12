import { LoginContext } from "@/components/modals/login/loginContext";
import { Work_Sans } from "next/font/google";
import { cookies } from "next/headers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./(nav)/navbar";
import "./globals.css";

const work_Sans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "300", "400", "100", "500", "700", "900"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tokenCookie = cookies().has("token");
  const isLoggedIn = tokenCookie ? true : false;
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
