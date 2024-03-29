import React, { useEffect, useState } from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import personal from "./personal-photo.jpg";

const Hero = () => {
  const [experience, setExperience] = useState({ years: 0, months: 0 });

  useEffect(() => {
    // Start date of experience
    const startDate = new Date("02/08/2021");

    // Current date
    const currentDate = new Date();

    // Calculate the difference in months and years
    const diffInMonths =
      (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
      (currentDate.getMonth() - startDate.getMonth());
    const years = Math.floor(diffInMonths / 12);
    const months = diffInMonths % 12;

    setExperience({ years, months });
  }, []);
  // const startDate = new Date("02/08/2021");
  // const [experience, setExperience] = useState(calculateExperience(startDate));

  // function calculateExperience(startDate) {
  //   const currentDate = new Date();
  //   const diffInMilliseconds = currentDate - startDate;
  //   const years = diffInMilliseconds / (365 * 24 * 60 * 60 * 1000);
  //   return years.toFixed(1);
  // }

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setExperience(calculateExperience(startDate));
  //   }, 1000); // Update experience every second (you can adjust the interval as needed)

  //   return () => clearInterval(intervalId);
  // }, [startDate]);
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            className="primaryText"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            Hey There,
            <br />
            I'm Devansh.
          </motion.span>
          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            Exquisite web design
            <br />
            Fueled by passion and expertise
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src={personal}
            style={{ width: "400px" }}
            alt=""
          />
        </motion.div>

        <a className={css.email} href="mailto:lachakedev@gmail.com">
          lachakedev@gmail.com
        </a>

        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">
              {experience.years}.{experience.months}
            </div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img src="./certificate.png" alt="" />
            <span>Front-End Developer</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
