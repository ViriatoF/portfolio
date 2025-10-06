import styles from "./section.module.css"

export default function Section({ id, title, className, children }: { id: string; title: string; className:string; children: React.ReactNode }){
  return (
    <section id={id} className={`${className} reveal`}>
      <section className={styles.sectionHeader}>
        <h2 className={styles.title}>{title}</h2>
      </section>
      <section className="reveal">
        {children}
      </section>
    </section>
  );
}