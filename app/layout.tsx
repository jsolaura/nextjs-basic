import "../styles/global.css";
import {ReactNode} from "react";
import Navigation from "@/components/common/navigation.tsx";
import {Metadata} from "next";

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
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
