import type { Metadata } from "next";
import { Roboto, Permanent_Marker } from "next/font/google";
import "./globals.css";

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
	title: "Viriato FERREIRA - Front-end developper",
	description:
		"Viriato FERREIRA portfolio one page, french front-end developper based in Nantes, LA, France",
		openGraph:{
			title:"Viriato FERREIRA - Front-end developper",
			type:"website"
		}
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body className={`${roboto.variable} ${marker.variable}`}>
				
				{children}
				
			</body>
		</html>
	);
}
