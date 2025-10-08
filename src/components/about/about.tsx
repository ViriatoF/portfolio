import Link from "next/link";
import Section from "../section/section";
import styles from "./about.module.css"

export default function About() {
  return (
    <Section id="about" title="À propos" className={`${styles.about}`}>
      <div>
        <p>Après de multiples expériences me permettant de gagner en adaptabilité, en aisance relationnelle, en maturité et en organisation, j'ai décidé, à 42 ans, de me tourner
          vers un secteur qui m'attire depuis mon plus jeune âge :
        </p>
      </div>
      <div>
        <span>L'informatique</span>
      </div>
      <div>
        <p>Etant salarié, j'ai donc fais une demande de transition professionnelle pour passer le titre professionnel Développeur Web et Web Mobile (diplôme de niveau 5 équivalent à un Bac + 2)
          à la <a href="https://www.wildcodeschool.com/" target="_blank">Wild Code School</a> pour reprendre tout depuis le début et me spécialiser sur ReactJs.</p>
      </div>
      <div>
        <p>Mais pourquoi donc s'arrêter là alors que l'on peut encore s'améliorer ?</p>
      </div>
      <div>
        <p>Aujourd'hui, je me lance un nouveau défi (oui oui, un de plus) :</p>
        <p>Le Master Lead Developer Front-End à l'<a href="https://www.ecv.fr/digital/mastere-developpement-web/" target="_blank">ECV</a></p>
      </div>
      <ul className={styles.list}>
        <li>Quand suis-je disponible ?  <span className="reveal"> ASAP</span></li>
        <li>Ce que j'aimerais faire ? </li>
        <li>Développement Front-End (ou Back-end).</li>
        <li>ReactJS, NextJS, Wordpress ou tout autre CMS.</li>
        <li>Travailler l'accessibilité, l'ergonomie, le SEO...</li>
        <li>Participer à de petits projets, de grands projets... de petits projets qui deviendront de grands projets.</li>
      </ul>
    </Section>
  );
}