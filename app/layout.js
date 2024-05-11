import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Provider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learn Next",
  description: "This is app is for learning more about NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="px-8 py-20 max-w-6xl mx-auto ">
          <Provider>{children}</Provider>
        </main>
      </body>
    </html>
  );
}
