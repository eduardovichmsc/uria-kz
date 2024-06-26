import { Inter, Roboto } from "next/font/google";
import "./app.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "./wrapper";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} body-wrapper`}>
        <Wrapper children={children} />
      </body>
    </html>
  );
}
