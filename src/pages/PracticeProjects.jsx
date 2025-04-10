import ProjectCard from "../components/Experties/ProjectCard";
import { practiceProjects } from "../utils/data";
import style from "../styles/ProjectPages.module.scss";

const PracticeProjects = () => {
  return (
    <div className={style.container}>
      <h1>Practice Projects</h1>
      <div className={style.projectsGrid}>
        {practiceProjects.map((project, index) => (
          <ProjectCard key={project.title} {...project} delay={index * 0.2} />
        ))}
      </div>
    </div>
  );
};

export default PracticeProjects;
