'use client';

import Link from "next/link";
import styles from "./hero.module.css"
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { SiCodewars } from "react-icons/si";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Image from "next/image";
import useGsapHero from "../useGsapHero";


export default function Hero() {
  const ref= useGsapHero();
  return (
    <>
    <section id="home" ref={ref} aria-label="Accueil" className={`${styles.home} reveal`} >
      <section>
        <div className="hero-line" id={styles.heroline}>
          <h1>Viriato FERREIRA</h1>
          <span>Développeur Front-end</span> <br /> <mark>En recherche d'une alternance Master Lead Dev Front-end</mark> 
        </div>
        <Image
						src="/1710798284495.jpg"
						alt={"Picture of Viriato FERREIRA, french front-end developper"}
						width={250}
						height={250}
            className="socialPic"
					/>
      </section>
      <section  id="socialButtons" className={`${styles.socialButtons} socialButtons`}>
				<Link href={"https://www.linkedin.com/in/viriatoferreira/"} target="_blank" className={styles.btn} ><FaLinkedinIn /> Linkedin</Link>
				<Link href={"https://github.com/ViriatoF"} target="_blank" className={styles.btn}><FaGithub /> Github</Link>
				<Link href={"mailto: viriato.ferreira44@gmail.com"} className={styles.btn}><IoMailOutline /> Contact</Link>
				<Link href={"https://www.codewars.com/users/ViriatoF"} target="_blank" className={styles.btn}><SiCodewars /> Codewars</Link>
				<Link href={"CV_Viriato_FERREIRA.pdf"} download="CV_Viriato_FERREIRA.pdf" className={styles.btn}><FaCloudDownloadAlt /> CV</Link>
			</section>
    </section>
    
    </>
  )
}