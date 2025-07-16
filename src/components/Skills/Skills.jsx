import styles from "./Skills.module.css";
import skills from "../data/skills.json";
import { SkillCard } from "./SkillCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export function Skills() {
  const settings = {
    // centerMode: true,
    infinite: true,
    slidesToShow: 5,
    speed: 500,
  };
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
        <p className={styles.subtitle}>
          Here are some of the technologies that are part of my current stack:
        </p>
      
        <div className={styles.skills}>
          <Slider {...settings}>
          {skills.map((skill, id) => {
            return <SkillCard key={id} skill={skill} />;
          })}
          </Slider>
        </div>
      
    </section>
  );
}
