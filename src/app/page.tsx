import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import Projects from "../components/projects/projects";
import Skills from "../components/skills/skills";

export default function Home() {
	return (
		<>
		<div id="top"></div>
		<Header />
		<main>
			<Hero/>
			<About/>
			<Projects/>
			<Skills/>
		</main>
		<Footer />
		</>
	);
}
