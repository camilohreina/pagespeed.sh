import { Header } from "@/components/Header";
import "./globals.css";
import { Raleway } from "next/font/google";
import { Footer } from "@/components/Footer";

const inter = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Page Speed Stats",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-black bg-slate-200`}>
        <main className="containerFluid mt-8">
          <Header />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
