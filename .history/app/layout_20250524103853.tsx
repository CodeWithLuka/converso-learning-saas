import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";

import { Navbar } from "@/components/navbar";

import "./globals.css";

const bricolage = Bricolage_Grotesque({
	variable: "--font-bricolage",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Converso",
	description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={`${bricolage.variable} antialiased`}>
					<Navbar />
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
