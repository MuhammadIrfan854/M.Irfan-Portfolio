import "./skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div className="skills-page" id="skills">
      <h1>Skills</h1>
    <div className="web-icons">
  <div className="column">
    <div className="icon" data-aos="fade-up">
      <div className="icon-inner">
        <FaHtml5 color="#E34F26" title="HTML5" />
      </div>
      <span>HTML5</span>
    </div>
    <div className="icon" data-aos="fade-up" data-aos-delay="100">
      <div className="icon-inner">
        <FaCss3Alt color="#1572B6" title="CSS3" />
      </div>
      <span>CSS3</span>
    </div>
    <div className="icon" data-aos="fade-up" data-aos-delay="200">
      <div className="icon-inner">
        <FaJsSquare color="#F7DF1E" title="JavaScript" />
      </div>
      <span>JavaScript</span>
    </div>
  </div>

  <div className="column">
    <div className="icon" data-aos="fade-up" data-aos-delay="300">
      <div className="icon-inner">
        <SiTailwindcss color="#06B6D4" title="Tailwind CSS" />
      </div>
      <span>Tailwind CSS</span>
    </div>
    <div className="icon" data-aos="fade-up" data-aos-delay="400">
      <div className="icon-inner">
        <FaReact color="#61DBFB" title="React.js" />
      </div>
      <span>React.js</span>
    </div>
    <div className="icon" data-aos="fade-up" data-aos-delay="500">
      <div className="icon-inner">
        <FaGitAlt color="#F05032" title="Git" />
      </div>
      <span>Git</span>
    </div>
  </div>
</div>

    </div>
  );
};

export default Skills;
