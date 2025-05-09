import type { Metadata } from "next";
import { Roboto, Permanent_Marker } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
});

const marker = Permanent_Marker({
	variable: "--font-permanent-marker",
	subsets: ["latin"],
	weight: "400",
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
		<html lang="en">
			<body className={`${roboto.variable} ${marker.variable}`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
