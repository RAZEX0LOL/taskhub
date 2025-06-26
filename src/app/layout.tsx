import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import {SITE_NAME} from "@/constants";
import {Providers} from "@/app/Providers";

const font = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
    weight:['200','300','400','500','600','700','800','900'],
});


export const metadata: Metadata = {
    icons:{
        icon: '/images/favicon.ico',
        shortcut:'/images/favicon.ico',
    },
  title: {
      absolute:SITE_NAME,
      template:`%s | ${SITE_NAME}}`
  },
  description: "Easy use task manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
