import { Sora } from "next/font/google";
import "./globals.css";


const inter = Sora ({ subsets: ["latin"], weight : "400" });

export const metadata = {
  title: "Chennai | Digital print",
  description: "Digital print in chennai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
