import ProjectCard from "../components/Experties/ProjectCard";
import { officeProjects } from "../utils/data";
import style from "../styles/ProjectPages.module.scss";

const OfficeProjects = () => {
  return (
    <div className={style.container}>
      <h1>Office Projects</h1>
      <div className={style.projectsGrid}>
        {officeProjects.map((project, index) => (
          <ProjectCard key={project.title} {...project} delay={index * 0.2} />
        ))}
      </div>
    </div>
  );
};

export default OfficeProjects;
