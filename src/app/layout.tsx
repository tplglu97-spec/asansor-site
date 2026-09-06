import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ulu Asansör",
  description: "Bursa Nilüfer, Osmangazi, Yıldırım, İnegöl, Gürsu ve Kestel ilçelerinde profesyonel asansör bakım, 7/24 acil arıza servisi, revizyon ve montaj hizmetleri.",
  keywords: [
    "bursa asansör",
    "bursa asansör bakım",
    "bursa asansör servisi",
    "bursa asansör arıza",
    "bursa yük asansörlü",
    "bursa engelli asansörlü",
    "bursa çalışkal asansör",
    "bursa hidrolik asansör",
    "bursa oto asansör",
    "bursa yemek asansör",
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
    "ULUASANSÖR"
  ],
  authors: [{ name: "Ulu Asansör" }],
  openGraph: {
    title: "ULU ASANSÖR | Yüksekliğin Ulu Adresi",
    description: "Bursa'da güvenilir 7/24 asansör bakım, arıza ve montaj hizmetleri.",
    url: "https://uluasansor.com",
    siteName: "Ulu Asansör",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="bg-[#111] text-white antialiased selection:bg-[#00d2c4] selection:text-black">
        {children}
      </body>
    </html>
  );
}