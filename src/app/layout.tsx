import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ULUASANSÖR | Asansör Bakım, Arıza, Revizyon ve Montaj",
  description:
    "Bursa Nilüfer, Osmangazi, Yıldırım, İnegöl, Gürsu ve Kestel'de 7/24 asansör bakım, arıza servisi, yük asansörü, engelli asansörü, çalışkal asansör, hidrolik ve revizyon hizmetleri sunan ULUASANSÖR.",
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
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    yandex: "38cfcdab373b759d",
  },
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