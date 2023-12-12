import { Work_Sans } from "next/font/google";
import Navbar from "./(nav)/navbar";
import "./globals.css";

const work_Sans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "300", "400", "100", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <body className={work_Sans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
