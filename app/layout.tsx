import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Oripov Bobur — Frontend Developer",
  description:
    "Crafting modern, fast, and visually perfect web experiences. Frontend Developer specializing in React, Next.js, and TypeScript.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Web Developer", "Oripov Bobur"],
  authors: [{ name: "Oripov Bobur" }],
  openGraph: {
    title: "Oripov Bobur — Frontend Developer",
    description: "Crafting modern, fast, and visually perfect web experiences.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
