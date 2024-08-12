import { LoginContext } from "@/components/modals/login/loginContext";
import { Work_Sans } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Navbar from "./navbar";

const work_Sans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "300", "400", "100", "500", "700", "900"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          <Navbar />
          {children}
        </LoginContext>
      </body>
    </html>
  );
}
