import { Inter } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/layout/MainNav";
import Footer from "@/components/layout/Footer";
import KakaoButton from "@/components/layout/KakaoButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NEXT 부트캠프 | 메타리치",
  description:
    "세대와 세대를 잇다, 보험의 미래를 잇다. 메타리치의 미래형 성장 플랫폼, NEXT 부트캠프에서 보험영업의 전문가로 성장하세요.",
  metadataBase: new URL("http://www.metarich-next.kr"),
  openGraph: {
    title: "NEXT 부트캠프 | 메타리치",
    description: "세대와 세대를 잇다, 보험의 미래를 잇다. 메타리치의 미래형 성장 플랫폼",
    url: "http://www.metarich-next.kr",
    siteName: "NEXT 부트캠프",
    images: [
      {
        url: "/metarich.png",
        width: 1200,
        height: 630,
        alt: "NEXT 부트캠프 - 메타리치의 미래형 성장 플랫폼",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/metarich.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: ["/metarich.png"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  twitter: {
    card: "summary_large_image",
    title: "NEXT 부트캠프 | 메타리치",
    description: "세대와 세대를 잇다, 보험의 미래를 잇다. 메타리치의 미래형 성장 플랫폼",
    images: ["/metarich.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/metarich.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
      </head>
      <body className={inter.className}>
        <MainNav />
        <main className="pt-20 pb-24 md:pt-24 md:pb-28">{children}</main>
        <KakaoButton />
        <Footer />
      </body>
    </html>
  );
}
