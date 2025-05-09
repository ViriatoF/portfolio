import Image from "next/image";
import styles from "@/page.module.css";
import Header from "@/components/header";
import Footer from "./components/footer";

export default function Home() {
	return (
		<>
			<main className={styles.main}>
				<section>
					<section className={styles.title}>
						<h1>Viriato FERREIRA</h1>
						<h2>Développeur web et web mobile</h2>
					</section>
					<Image
						src="/programming-background-collage.jpg"
						alt={"Picture of programming just for illustration"}
						width={920}
						height={600}
					/>
				</section>
				<section className={styles.secondPart}>
					<h3>Technos et outils</h3>
					<section className={styles.technos}>
						<figure>
							<Image
								src={"/technos/html-1.svg"}
								alt={"Html icon"}
								width={150}
								height={150}
							/>
							<figcaption>HTML</figcaption>
						</figure>
						<figure>
							<Image
								src={"/technos/css-3.svg"}
								alt={"CSS 3 icon"}
								width={150}
								height={150}
							/>
							<figcaption>CSS</figcaption>
						</figure>
						<figure>
							<Image
								src={"/technos/react-2.svg"}
								alt={"React.Js icon"}
								width={150}
								height={150}
							/>
							<figcaption>React.Js</figcaption>
						</figure>
						<figure>
							<Image
								src={"/technos/next.svg"}
								alt={"Next.Js icon"}
								width={150}
								height={150}
							/>
							<figcaption>Next.Js</figcaption>
						</figure>
						<figure>
							<Image
								src={"/technos/nodejs.svg"}
								alt={"Node.Js icon"}
								width={150}
								height={150}
							/>
							<figcaption>Node.Js</figcaption>
						</figure>
						<figure>
							<Image
								src={"/technos/express.svg"}
								alt={"ExpressJs icon"}
								width={150}
								height={150}
							/>
							<figcaption>Express.js</figcaption>
						</figure>
						<figure>
							<Image
								src={"/technos/c--4.svg"}
								alt={"C# icon"}
								width={150}
								height={150}
							/>
							<figcaption>C#</figcaption>
						</figure>
						<figure>
							<Image
								src={"/technos/dot-net-core-7.svg"}
								alt={".Net icon"}
								width={150}
								height={150}
							/>
							<figcaption>.Net</figcaption>
						</figure>
						<figure>
							<Image
								src={"/technos/wordpress.svg"}
								alt={"Wordpress icon"}
								width={150}
								height={150}
							/>
							<figcaption>Wordpress</figcaption>
						</figure>
					</section>
				</section>
			</main>
		</>
	);
}
