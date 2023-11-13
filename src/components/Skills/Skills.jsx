import React from "react";
import { skills } from "../../utils/data";
import css from "../Work/Work.module.scss";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerChildren,
  textVariant2,
  zoomIn,
} from "../../utils/motion";

const Skills = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="skills"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        {/* heading */}
        <span className="primaryText yPaddings">My Skills</span>

        <div className={`flexCenter ${css.experiences}`}>
          {skills.map((exp, i) => {
            return (
              <motion.div
                variants={textVariant2}
                key={i}
                className={`flexCenter ${css.exp}`}
              >
                <div className={css.post}>
                  <h1>{exp.place}</h1>
                </div>
                <div className={css.role}>
                  {exp.role?.map((item) => {
                    return <h1>{item}</h1>;
                  })}
                </div>
              </motion.div>
            );
          })}

          <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
            <motion.div
              variants={fadeIn("down", "tween", 2, 1.5)}
              className={css.line}
            ></motion.div>
            <div>
              <div
                className={css.circle}
                style={{ background: "#286F6C" }}
              ></div>
            </div>
            <div>
              <div
                className={css.circle}
                style={{ background: "#F2704E" }}
              ></div>
            </div>
            <div>
              <div
                className={css.circle}
                style={{ background: "#EEC048" }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
