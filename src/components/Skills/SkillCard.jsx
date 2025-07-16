import styles from "./SkillCard.module.css";

export function SkillCard({skill}){
    return(
        <div className={styles.container}>
                        <img className={styles["skill-image"]} src={`/assets/${skill.imageSrc}`} alt={`/assets/${skill.title}`}/>
                        <h3 className={styles["skill-name"]}>{`${skill.title}`}</h3>
        </div>
    );
}