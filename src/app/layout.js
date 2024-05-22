import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DDHH Gelco",
  description: "Formación sobre derechos humanos para Gelco",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/assets/gorro-de-graduacion.svg"/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
