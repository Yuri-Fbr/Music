import { Inter } from "next/font/google";
import "./globals.css";
import('tailwindcss').Config

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Music",
  description: "A music aplication.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className= "bg-zinc-900 text-zinc-50" >{children}</body>
    </html>
  );
}
