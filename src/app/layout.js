import { Inter } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/layout/MainNav";

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
      { url: "/metarich.png", type: "image/png" },
      { url: "/metarich.png", sizes: "16x16", type: "image/png" },
      { url: "/metarich.png", sizes: "32x32", type: "image/png" },
      { url: "/metarich.png", sizes: "192x192", type: "image/png" },
      { url: "/metarich.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: [{ url: "/metarich.png" }],
    apple: [{ url: "/metarich.png", sizes: "180x180", type: "image/png" }],
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
      <body className={inter.className}>
        <MainNav />
        <main className="pt-20 md:pt-24">{children}</main>
      </body>
    </html>
  );
}
