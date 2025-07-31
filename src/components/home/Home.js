import "./home.css";
import IrfanImage from '../../assets/images/m.irfan.jpg';


const Home = () => {
  return (
    <div className="home-container">
      <section id="home-page">
        <div id="left">
          <div className="text-content">
            <h1>Hi, I'm <span>Muhammad Irfan</span></h1>
            <h2>Frontend Web Developer</h2>
            <p>
              I build beautiful, fast, and responsive websites. Passionate about UI/UX and writing clean code.
            </p>
            <button className="contact-btn">Contact Me</button>
          </div>

          <div className="social-icons">
            <a href="https://www.instagram.com/frontendirfan2025/" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61574996147042" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://github.com/MuhammadIrfan854" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-github"></i>
            </a>
          </div>
        </div>

        <div id="right">
          <img src={IrfanImage} alt="Muhammad Irfan" />
        </div>
      </section>
    </div>
  );
};

export default Home;
