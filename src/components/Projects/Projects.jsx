import styles from './Projects.module.css';

import projects from '../data/projects.json';
import { ProjectCard } from './ProjectCard';

export function Projects() {
    return (
        <section className={styles.container} id='projects'>
            <h2 className={styles.title}>Projects</h2>
            <h4 className={styles.subtitle}>Most recent work</h4>
            <div className={styles.projects}>
                {projects.map((project,id)=>{
                    return <ProjectCard key={id} project={project}/>;
                })}
            </div>
        </section>
    );
}