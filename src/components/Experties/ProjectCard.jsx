import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import style from "./ProjectCard.module.scss";

const ProjectCard = ({ title, description, image, link, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className={style.card}
    >
      <img src={image} alt={title} />
      <div className={style.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Visit Website <FaExternalLinkAlt />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
