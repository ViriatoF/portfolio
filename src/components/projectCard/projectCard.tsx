'use client'
import Link from "next/link";
import { FaEye, FaGithub } from "react-icons/fa6";
import Image from "next/image";
import styles from "./projectCard.module.css"
import { _Project } from "../../types/projectsType";


export default function ProjectCard({ project } : { project: _Project }) {
  
  return (
    <article className={styles.article}>
      <Image
        src={project.image}
        alt={"Image capture from the Good-Vibes website "}
        width={540}
        height={300}
        />
      <section>
        <header>
          <h3>{project.title}</h3>
        </header>
        <section>
          <ul>
            {project.stack?.map((i, index)=> (

              <li key={index}>{i}</li>
            )
            )}

          </ul>
        </section>
        <footer>
          {project.codeUrl?  <Link
								href={project.codeUrl!}
								target="_blank"
                aria-label="Lien vers le code Github"
							>
								<FaGithub />
					</Link> : '' }
          {project.websiteUrl? <Link
								href={project.websiteUrl!}
								target="_blank"
                aria-label="Lien vers le site"
							>
								<FaEye />
					</Link>: ''}
          
        </footer>
      </section>
    </article>
  )
}