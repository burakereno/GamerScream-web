import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "GamerScream — Voice Chat for Gamers",
    description:
        "Lightweight real-time voice chat built for gaming parties. Available on Mac and Windows.",
    openGraph: {
        title: "GamerScream — Voice Chat for Gamers",
        description:
            "Lightweight real-time voice chat built for gaming parties. Available on Mac and Windows.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${inter.variable} font-sans antialiased bg-bg-primary text-text-primary`}
            >
                {children}
            </body>
        </html>
    );
}
