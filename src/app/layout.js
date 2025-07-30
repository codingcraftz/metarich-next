import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/layout/MainNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NEXT 부트캠프",
  description: "NEXT 부트캠프 - 미래를 선도하는 개발자 양성 프로그램",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
        <header className="border-b">
          <div className="container mx-auto py-4">
            <MainNav />
          </div>
        </header>
        <main className="container mx-auto py-8">{children}</main>
      </body>
    </html>
  );
}
