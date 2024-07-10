import "../styles/global.css";
import {ReactNode} from "react";
import Navigation from "@/components/common/navigation.tsx";
import {Metadata} from "next";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
})

export const metadata: Metadata = {
    title: {
        template: "%s | Next Movie",
        default: "Next Movie"
    },
    description: 'The best movies on the best framework',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
