import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ULUASANSÖR | Asansör Bakım, Arıza, Revizyon ve Montaj",
  description:
    "ULUASANSÖR; asansör bakım, arıza, revizyon ve montaj hizmetlerinde hızlı müdahale, güvenilir teknik servis ve profesyonel çözümler sunar.",
  keywords: [
    "asansör bakımı",
    "asansör arıza",
    "asansör servisi",
    "asansör revizyon",
    "asansör montaj",
    "ULUASANSÖR",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}