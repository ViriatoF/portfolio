import Image from "next/image";
import styles from "@/work/work.module.css";
import Link from "next/link";

export default function Work() {
	return (
		<>
			<main className={styles.main}>
				<section className={styles.titleWork}>
					<h1>Projects</h1>
					<h2>Past, present and future</h2>
				</section>
				<section className={styles.projects}>
					<figure>
						<Image
							src={"/projects/potpiette.png"}
							alt={"Image capture from the potpiette website "}
							width={540}
							height={300}
						/>
						<figcaption>Pot'Piette</figcaption>
						<section>
							<Link
								href={"https://github.com/ViriatoF/Pot-piette"}
								target="_blank"
							>
								<Image
									src={"/technos/github.svg"}
									alt={"Link for github Pot'Piette project"}
									width={30}
									height={30}
								/>
							</Link>
						</section>
					</figure>
					<figure>
						<Image
							src={"/projects/good-vibes.png"}
							alt={"Image capture from the Good-Vibes website "}
							width={540}
							height={300}
						/>
						<figcaption>Good-Vibes</figcaption>
						<section>
							<Link
								href={"https://github.com/ViriatoF/Good-Vibes"}
								target="_blank"
							>
								<Image
									src={"/technos/github.svg"}
									alt={"Link for github Good-Vibes project"}
									width={30}
									height={30}
								/>
							</Link>
						</section>
					</figure>
					<figure>
						<Image
							src={"/projects/rick-and-morty.png"}
							alt={"Image capture from the Rick and Morty website "}
							width={540}
							height={300}
						/>
						<figcaption>Rick and Morty</figcaption>
						<section>
							<Link
								href={"https://github.com/ViriatoF/Rick-and-Morty"}
								target="_blank"
							>
								<Image
									src={"/technos/github.svg"}
									alt={"Link for github Rick and Morty project"}
									width={30}
									height={30}
								/>
							</Link>
						</section>
					</figure>
				</section>
			</main>
		</>
	);
}
