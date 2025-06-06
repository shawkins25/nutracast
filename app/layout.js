import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nutracast",
  description: "A regular supplement for wisdom and encouragement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`body ${roboto.variable}`}>{children}</body>
    </html>
  );
}
