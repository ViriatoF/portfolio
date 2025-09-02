import Image from "next/image";
import styles from "@/page.module.css";
import Link from "next/link";

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
						<Link
							href="https://developer.mozilla.org/fr/docs/Web/HTML"
							target="_blank"
						>
							<figure>
								<Image
									src={"/technos/html-1.svg"}
									alt={"Html icon"}
									width={150}
									height={150}
								/>
								<figcaption>HTML</figcaption>
							</figure>
						</Link>
						<Link
							href="https://developer.mozilla.org/fr/docs/Web/CSS"
							target="_blank"
						>
							<figure>
								<Image
									src={"/technos/css-3.svg"}
									alt={"CSS 3 icon"}
									width={150}
									height={150}
								/>
								<figcaption>CSS</figcaption>
							</figure>
						</Link>
						<Link
							href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
							target="_blank"
						>
							<figure>
								<Image
									src={"/technos/javascript.svg"}
									alt={"Javascript icon"}
									width={150}
									height={150}
								/>
								<figcaption>Javascript</figcaption>
							</figure>
						</Link>
						<Link href="https://fr.react.dev/" target="_blank">
							<figure>
								<Image
									src={"/technos/react-2.svg"}
									alt={"React.Js icon"}
									width={150}
									height={150}
								/>
								<figcaption>React.Js</figcaption>
							</figure>
						</Link>
						<Link href="https://nextjs.org/" target="_blank">
							<figure>
								<Image
									src={"/technos/next.svg"}
									alt={"Next.Js icon"}
									width={150}
									height={150}
								/>
								<figcaption>Next.Js</figcaption>
							</figure>
						</Link>
						<Link href="https://nodejs.org/en" target="_blank">
							<figure>
								<Image
									src={"/technos/nodejs.svg"}
									alt={"Node.Js icon"}
									width={150}
									height={150}
								/>
								<figcaption>Node.Js</figcaption>
							</figure>
						</Link>
						<Link href="https://expressjs.com/" target="_blank">
							<figure>
								<Image
									src={"/technos/express.svg"}
									alt={"ExpressJs icon"}
									width={150}
									height={150}
								/>
								<figcaption>Express.js</figcaption>
							</figure>
						</Link>
						<Link href="https://www.typescriptlang.org/" target="_blank">
							<figure>
								<Image
									src={"/technos/typescript.svg"}
									alt={"Typescript icon"}
									width={150}
									height={150}
								/>
								<figcaption>Typescript</figcaption>
							</figure>
						</Link>
						<Link
							href="https://dotnet.microsoft.com/fr-fr/languages/csharp#:~:text=C%23%20est%20un%20langage%20de,langages%20de%20programmation%20sur%20GitHub."
							target="_blank"
						>
							<figure>
								<Image
									src={"/technos/c--4.svg"}
									alt={"C# icon"}
									width={150}
									height={150}
								/>
								<figcaption>C#</figcaption>
							</figure>
						</Link>
						<Link href="https://dotnet.microsoft.com/fr-fr/" target="_blank">
							<figure>
								<Image
									src={"/technos/dot-net-core-7.svg"}
									alt={".Net icon"}
									width={150}
									height={150}
								/>
								<figcaption>.Net</figcaption>
							</figure>
						</Link>
						<Link href="https://fr.wordpress.org/" target="_blank">
							<figure>
								<Image
									src={"/technos/wordpress.svg"}
									alt={"Wordpress icon"}
									width={150}
									height={150}
								/>
								<figcaption>Wordpress</figcaption>
							</figure>
						</Link>
						<Link href="https://www.php.net/" target="_blank">
							<figure>
								<Image
									src={"/technos/php-4.svg"}
									alt={"PHP icon"}
									width={150}
									height={150}
								/>
								<figcaption>PHP</figcaption>
							</figure>
						</Link>
						<Link href="https://www.mysql.com/fr/" target="_blank">
							<figure>
								<Image
									src={"/technos/mysql.svg"}
									alt={"MySql icon"}
									width={150}
									height={150}
								/>
								<figcaption>MySQL</figcaption>
							</figure>
						</Link>
						<Link href="https://www.mysql.com/fr/" target="_blank">
							<figure>
								<Image
									src={"/technos/vscode.svg"}
									alt={"MySql icon"}
									width={150}
									height={150}
								/>
								<figcaption>VSCode</figcaption>
							</figure>
						</Link>
					</section>
				</section>
			</main>
		</>
	);
}
