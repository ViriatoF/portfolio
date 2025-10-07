import Section from "../section/section";
import styles from "./skills.module.css"
import Image from "next/image";

export default function Skills() {
  return (
    <Section id="skills" title="Mes compétences" className={`${styles.skills}`}>
      <section className={styles.skillsContainer}>

        <section className={styles.front}>
          <h4>Front</h4>
          <figure>
            <Image src="/technos/react-2.svg" width={200} height={200} alt=""/>
            <figcaption>ReactJS</figcaption>
          </figure>
          <figure>
            <Image src="/technos/next.svg" width={200} height={200} alt=""/>
            <figcaption>NextJS</figcaption>
          </figure>
          <figure>
            <Image src="technos/wordpress.svg" width={200} height={200} alt=""/>
            <figcaption>Wordpress</figcaption>
          </figure>
        </section>
        <section className={styles.back}>
          <h4>Back</h4>
          <figure>
            <Image src="/technos/nodejs.svg" width={200} height={200} alt=""/>
            <figcaption>NodeJS</figcaption>
          </figure>
          <figure>
            <Image src="/technos/typescript.svg" width={200} height={200} alt=""/>
            <figcaption>Typescript</figcaption>
          </figure>
          <figure>
            <Image src="/technos/express.svg" width={200} height={200} alt=""/>
            <figcaption>ExpressJS</figcaption>
          </figure>
        </section>
        <section className={styles.bdd}>
          <h4>Base de donnée</h4>
          <figure>
            <Image src="/technos/mysql.svg" width={200} height={200} alt=""/>
            <figcaption>MySQL</figcaption>
          </figure>
        </section>
        <section className={styles.utils}>
          <h4>Utils</h4>
          <figure>
            <Image src="/technos/vscode.svg" width={200} height={200} alt=""/>
            <figcaption>VSCode</figcaption>
          </figure>
          <figure>
            <Image src="/technos/git-icon.svg" width={200} height={200} alt=""/>
            <figcaption>Git</figcaption>
          </figure>
          <figure>
            <Image src="/technos/figma-icon.svg" width={200} height={200} alt=""/>
            <figcaption>Figma</figcaption>
          </figure>
        </section>
        <section className={styles.certifs}>
          <h4>Certifications</h4>
          <figure>
            <Image src="/technos/Opquast.svg" width={200} height={200} alt=""/>
            <figcaption>Opquast</figcaption>
          </figure>
          <figure>
            <Image src="/technos/exin.svg" width={200} height={200} alt=""/>
            <figcaption>Exin</figcaption>
          </figure>
          
        </section>
      </section>
      

    </Section>
  )
}