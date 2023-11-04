import { Link } from "react-router-dom";
import "./about.css";
import "./style.css";
import css from "../images/css-3.png";
import js from "../images/js.png";
import html from "../images/html-5.png";
import bootstrap from "../images/bootstrap.png";
import github from "../images/github.png";
import java from "../images/java1.png";
import nodejs from "../images/nodejs.png";
import mongodb from "../images/mongodb.png";
import mysql from "../images/mysql.png";
import tailwind from "../images/tailwind.png";
import reactjs from "../images/reactjs.png";

const About = () => {
  return (
    <body>
      <div className="main-container">
        <div id="sub-container">
          {/* <!-- <h1 className="heading">About Me</h1> --> */}
          <h3 className="about-sub-heading">
            Hello there! <br /> Welcome to my little corner of the internet.
          </h3>
        </div>
        <div className="about-content">
          <div className="about-content-main">
            <p className="about-content-main-details">
              I'm <strong>Sahil Gupta</strong>, a passionate{" "}
              <strong>Front-End Developer</strong> with a deep love for
              creativity and innovation.
            </p>
            <p className="about-content-main-details">
              As a Front-End Developer, I thrive on turning ideas and designs
              into captivating digital experiences. My dedication to crafting
              visually appealing and user-friendly websites is fueled by my
              genuine fascination with all things tech-related.
            </p>
            <p className="about-content-main-details">
              Beyond technology, I'm immersed in the enchanting world of books,
              where I merge with captivating stories and profound ideas. Writing
              is my sanctuary, pouring emotions into poetry that evokes deep
              introspection.
            </p>
            <p className="about-content-main-details">
              The night sky mesmerizes me, offering solace as I contemplate the
              wonders of the universe. Love philosophy guides me, fostering
              empathy and understanding.
            </p>
            <p className="about-content-main-details">
              I believe in continuous growth and learning, and I'm constantly
              seeking new challenges and opportunities. If you're looking for a
              dedicated Front-End developer and a creative mind, I'd love to
              collaborate with you. Let's bring your ideas to life and build
              meaningful experiences together. Contact me to discuss your
              project and let the magic unfold!
            </p>
          </div>

          <div className="about-content-skills">
            <h3> My Skills</h3>
            <div className="about-skills">
              <div className="skills-skill">
                <img src={html} />
              </div>
              <div className="skills-skill">
                <img src={css} />
              </div>
              <div className="skills-skill">
                <img src={js} />
              </div>
              <div className="skills-skill">
                <img src={reactjs} />
              </div>
              <div className="skills-skill">
                <img src={java} />
              </div>
              <div className="skills-skill">
                <img src={tailwind} />
              </div>
              <div className="skills-skill">
                <img src={mysql} />
              </div>
              <div className="skills-skill">
                <img src={mongodb} />
              </div>
              <div className="skills-skill">
                <img src={bootstrap} />
              </div>
              <div className="skills-skill">
                <img src={nodejs} />
              </div>
              <div className="skills-skill">
                <img src={github} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default About;
