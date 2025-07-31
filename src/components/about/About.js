import "./about.css";
import IrfanImage from "../../assets/images/m.irfan.jpg";


const About = () => {
  return (
    <div id="about">
      <div className="main-container">
      <h1>About</h1>
      <div className="container">
        <div className="left" data-aos="fade-up">
          <img src={IrfanImage} alt="Muhammad Irfan" />
        </div>
        <div className="right" data-aos="zoom-in">
          <h2>Hello</h2>
          <p>
            Hello, I'm Muhammad Irfan — a passionate frontend web developer and
            current intern at Digital Omega. I specialize in HTML5, CSS3,
            JavaScript, Tailwind CSS, and React.js. I love turning ideas into
            clean, responsive websites. Currently, I’m focused on sharpening my
            skills and building real-world projects.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
