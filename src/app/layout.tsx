import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Viriato FERREIRA",
	description:
		"Viriato FERREIRA portfolio, french front-end developper based in Nantes, LA, France",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body className={`${roboto.variable}`}>{children}</body>
		</html>
	);
}
