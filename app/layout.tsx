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
      <head>
        <link
          rel="icon"
          type="image/png"
          href="https://cdn.arinji.com/u/rj02LM.png"
          sizes="48×48"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8A1838" />

        <link rel="canonical" href="https://news.arinji.com/" />
        <meta
          name="description"
          content="News Nest is a news aggregator for the web. It is a free and open source and uses a local database to store articles meaning 24/7 access to top tier articles. No Paywall Required, No Account Needed, just news discovery and staying updated."
        />

        <meta name="keywords" content="news, newsnest , global" />
        <meta name="author" content="Arinji" />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="News Nest" />
        <meta
          property="og:description"
          content="News Nest is a news aggregator for the web. It is a free and open source and uses a local database to store articles meaning 24/7 access to top tier articles. No Paywall Required, No Account Needed, just news discovery and staying updated."
        />
        <meta
          property="og:image"
          content="https://cdn.arinji.com/u/LcC215.png"
        />
        <meta property="og:url" content="https://news.arinji.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="News Nest" />
        <meta
          name="twitter:description"
          content="News Nest is a news aggregator for the web. It is a free and open source and uses a local database to store articles meaning 24/7 access to top tier articles. No Paywall Required, No Account Needed, just news discovery and staying updated."
        />
        <meta
          name="twitter:image"
          content="https://cdn.arinji.com/u/LcC215.png"
        />
        <title>News Nest</title>
      </head>
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
