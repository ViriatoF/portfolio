import Section from "../section/section";
import styles from "./about.module.css"

export default function About() {
  return (
    <Section id="about" title="À propos" className={`${styles.about} reveal`}>
      <p>Après de multiples expériences me permettant de gagner en adaptabilité notamment dans la relation client et une reconversion réussi avec l'obtention
         d'un titre professionnel Développeur Web et Web Mobile (DWWM), je rentre à l'Ecole de la Création Visuelle (ECV Nantes).
         Cela me permettra d'aller encore plus loin dans l'expertise coté Front-End</p>
      <ul className={styles.list}>
        <li>Quand suis-je disponible?  <span className="reveal"> Now</span></li>
        <li>Ce que j'aimerais faire ? Développement Front-End (ou Back-end), ReactJS, NextJS, Wordpress ou tout autre CMS .</li>
      </ul>
    </Section>
  );
}