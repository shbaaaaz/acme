import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageEnum } from "@/utils/enums";
import { fetchMetadata } from "@/lib/cmsData";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  
  const seoDetails = await fetchMetadata(PageEnum.Home)

  return {
    title: seoDetails.content.metadata?.pageTitle || "Acme | Hygraph",
    description: seoDetails.content.metadata?.pageDescription,
    openGraph: {
      images: [seoDetails.content.metadata?.ogImage?.url as string],
    }
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
