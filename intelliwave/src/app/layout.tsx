import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Intelliwave | Agence d'automatisation AI n8n",
  description:
    "Intelliwave conçoit des chatbots sur mesure et des workflows n8n pour automatiser vos processus et offrir une expérience client augmentée.",
  openGraph: {
    title: "Intelliwave | Agence d'automatisation AI n8n",
    description:
      "Chatbots personnalisés, automatisations n8n et intégrations AI pour accélérer votre croissance.",
    url: "https://agentic-554fb826.vercel.app",
    siteName: "Intelliwave",
    locale: "fr_FR",
    type: "website",
  },
  metadataBase: new URL("https://agentic-554fb826.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
