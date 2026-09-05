import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bursa Asansör Bakım, Servis, Yük, Engelli ve Çalışkal Asansör | ULUASANSÖR",
  description:
    "Bursa Nilüfer, Osmangazi, Yıldırım, İnegöl, Gürsu ve Kestel'de 7/24 asansör bakım, arıza servisi, yük asansörü, engelli asansörü, çalışkal asansör, hidrolik ve revizyon hizmetleri. Güvenilir teknik servis.",
  keywords: [
    "bursa asansör",
    "bursa asansör bakım",
    "bursa asansör servisi",
    "bursa asansör arıza",
    "bursa yük asansörü",
    "bursa engelli asansörü",
    "bursa çalışkal asansör",
    "bursa hidrolik asansör",
    "bursa oto asansörü",
    "bursa yemek asansörü",
    "bursa nilüfer asansör",
    "bursa osman gazi asansör",
    "bursa yıldırım asansör",
    "bursa inegöl asansör",
    "bursa gürsü asansör",
    "bursa kestel asansör",
    "asansör teknik servis",
    "asansör arızacısı",
    "asansör bakımcısı",
    "asansör revizyon",
    "asansör periyodik kontrol",
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