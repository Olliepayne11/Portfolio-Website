import ollie from "../assets/Ollie2.jpeg"
import aboutme from "../assets/aboutme.jpg"

export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src={aboutme} alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">Profile</p>
            <h1 className="skills--section--heading">About Me</h1>
            <p className="hero--section-description">
                Hello! I am a Full-Stack Developer from London, currently enchancing my skills with IT Career Switch to help achieve my goal of working full-time within the industry.
            </p>
            <p className="hero--section-description">
                I find great joy in the creative and problem-solving elements of coding, using my expertise to develop a range of applications. 
                Please see the portfolio section below to view the range of applications I have created.
            </p>
          </div>
        </div>
      </section>
    );
  }