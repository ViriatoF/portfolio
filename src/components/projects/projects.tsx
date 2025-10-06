import { projects } from "../../library/project";
import ProjectCard from "../projectCard/projectCard";
import Section from "../section/section";
import styles from "./projects.module.css"

export default function Projects() {
  return (
    <Section id="projects" title="Projets" className={`${styles.projects} reveal `}>
      <section className={styles.projectsContainer}>
        {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
        
      </section>
    </Section>
  );
}