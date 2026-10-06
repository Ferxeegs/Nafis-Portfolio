import "./globals.css";
import { Poppins, Jost } from "next/font/google";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
	variable: "--font-poppins",
});

const jost = Jost({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	variable: "--font-jost",
});

export const metadata = {
	metadataBase: new URL("https://www.alvalens.my.id"),
	title: "Nafis Mufadhal | Portofolio",

	description:
		"Nafis Mufadhal — Master's student in Information Systems at Universitas Diponegoro. IT Infrastructure, Full Stack Developer, and Data Analyst.",

	author: "Nafis Mufadhal",
	siteUrl: "https://www.alvalens.my.id",
	applicationName: "Nafis Mufadhal",

	keywords: [
		"nafis mufadhal",
		"nafis",
		"mufadhal",
		"nafissmf",
		"undip",
		"universitas diponegoro",
		"full stack developer",
		"it infrastructure",
		"nafis portfolio",
	],

	openGraph: {
		type: "website",
		url: "https://www.alvalens.my.id",
		title: "Nafis Mufadhal | Portofolio",
		siteName: "Nafis Mufadhal | Portofolio",
		description:
			"Master's student in Information Systems at Universitas Diponegoro — IT Infrastructure, Full Stack Developer, Data Analyst.",
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Nafis Mufadhal Portofolio",
				width: 1200,
				height: 630,
			},
		],
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Nafis Mufadhal",
	url: "https://www.alvalens.my.id",
	jobTitle: "Full Stack Developer",
	worksFor: [
		{ "@type": "Organization", name: "Universitas Diponegoro" },
		{ "@type": "Organization", name: "UP2TI FSM Undip" },
	],
	alumniOf: {
		"@type": "CollegeOrUniversity",
		name: "Universitas Diponegoro",
	},
	sameAs: [
		"https://github.com/nafissmf",
		"https://www.linkedin.com/in/nafissmf",
	],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${poppins.variable} ${jost.variable}`}>
			<body>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
