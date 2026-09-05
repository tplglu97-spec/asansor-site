import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ULU ASANSÖR | Bursa Asansör Bakım, Arıza, Revizyon ve Montaj",
  description: "Bursa ve çevresinde profesyonel asansör bakım, 7/24 acil arıza servisi, revizyon, modernizasyon ve montaj hizmetleri. Yüksekliğin ulu adresi.",
  keywords: "ulu asansör, bursa asansör bakım, asansör arıza servisi bursa, asansör montajı, asansör revizyonu, esenevler asansör",
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