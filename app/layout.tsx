import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jovana Martatilova — Portfolio",
  description: "Information Systems student at Airlangga University. Fullstack Developer, UI/UX Designer, and organizational leader.",
  keywords: ["Jovana Martatilova", "fullstack developer", "UI/UX", "Surabaya", "Airlangga University"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
