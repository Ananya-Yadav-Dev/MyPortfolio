import styles from "./ProjectCard.module.css";
import { FaGithub } from "react-icons/fa";

export function ProjectCard({ project }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={`/assets/${project.imageSrc}`}
          alt={`${project.title} Thumbnail`}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
      
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <ul className={styles.skills}>
          {project.skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
        <div className={styles.links}>
          {/* <a
            href={project.demo}
            target="_blank"
            className={styles.viewProject}
          >
            View Project
          </a> */}
          <a href={project.source} target="_blank" className={styles.github}>
            <FaGithub />&nbsp;
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
