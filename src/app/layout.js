import { Inter } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/layout/MainNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NEXT 부트캠프 | 메타리치",
  description:
    "세대와 세대를 잇다, 보험의 미래를 잇다. 메타리치의 미래형 성장 플랫폼, NEXT 부트캠프에서 보험영업의 전문가로 성장하세요.",
  metadataBase: new URL("https://metarich.co.kr"),
  openGraph: {
    title: "NEXT 부트캠프 | 메타리치",
    description: "세대와 세대를 잇다, 보험의 미래를 잇다. 메타리치의 미래형 성장 플랫폼",
    url: "https://metarich.co.kr",
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
      { url: "/metarich.png" }, // 기본 favicon으로 metarich.png 사용
    ],
    apple: [{ url: "/metarich.png" }], // Apple 기기용 아이콘도 동일하게 사용
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
        <header className="border-b">
          <MainNav />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
