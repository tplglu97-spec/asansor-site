import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bursa Asansör Bakım ve Servisi | ULUASANSÖR",
  description:
    "ULUASANSÖR; Bursa'da asansör bakım, arıza, revizyon ve montaj hizmetlerinde hızlı müdahale, güvenilir teknik servis ve profesyonel çözümler sunar.",
  keywords: [
    "Bursa asansör",
    "Bursa asansör bakım",
    "Bursa asansör servisi",
    "Bursa asansör montaj",
    "asansör revizyon",
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