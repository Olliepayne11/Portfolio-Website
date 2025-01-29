import cv from '../assets/cv.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";

export default function Experience() {
    return (
        <section id="AboutMe" className="about--section">
        <div className="experience--section--img">
          <FontAwesomeIcon icon={faFileContract} size="10x" color="#3D52A0"/>
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">Experience</p>
            <h1 className="skills--section--heading">My CV</h1>
            <a href="./CV.pdf" download><button className="btn btn-primary">Download</button></a>
          </div>
        </div>
      </section>
    )
}