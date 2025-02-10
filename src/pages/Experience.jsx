import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";

export default function Experience() {
    return (
      <section id="experience" className="about--section">
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">Experience</p>
            <h1 className="skills--section--heading">Summary</h1>
            <p id="summaryText" className="text-lg">Coming from a strong background as an Executive for various job roles, I am now looking to re-establish myself as a developer. 
                                                    Programming is an area that I have always been interested in and I am now taking the opportunity to explore it as a serious career. 
                                                    To facilitate this change, I recently graduated from a coding Traineeship as a full stack developer including completing 2 real-world projects successfully to specification using a wide range of programming languages. 
                                                    Throughout my career to date, I have gained excellent communication, organisation and interpersonal skills, which I hope to apply alongside my technical skills in a new and challenging role in development. 
                                                    I am eager to gain commercial experience in the industry as I see myself working as a developer for the long term.</p>
            <h1 className="skills--section--heading">Education</h1>
            <ul id="educationList" className="text-md">
              <li>Digital Marketing Level 3 <b>(2020)</b></li>
              <li>British Computer Society - Principles of Coding <b>(2019)</b></li>
              <li>British Computer Society - Principles of Marketing <b>(2019)</b></li>
              <li>Sound Engineering Extended Diploma <b>(2018)</b></li>
            </ul>
            <h1 className="skills--section--heading">Experience</h1>
            <div id="workExperience">
              <div className="workExperienceDiv m-2">
                <p className="text-lg">The Specialist Works - Senior AV/AV Executive <b>(2021-2024)</b></p>
                <ul className="workExperienceList text-md">
                  <li>Responsible for the AV Planning & Buying across a range of UK and International clients</li>
                  <li>Presented AV plans and PCA’s to clients in both F2F & Online settings</li>
                  <li>Line manager to one of the Junior AV Executives, ensuring that they have the training available to build their knowledge, as well as providing support and guidance</li>
                </ul>
              </div>
              <div className="workExperienceDiv m-2">
                <p className="text-lg">Publicis Media - Investment Executive <b>(2020-2021)</b></p>
                <ul className="workExperienceList text-md">
                  <li>Sole responsibility for the promotion of P&G products on ITV (Scotland and Northern Ireland), Channel 4, Talking Pictures and Eurosport</li>
                  <li>Experience advertising on digital platforms for the Haircare brands within P&G</li>
                  <li>Skilled with platforms/tools such as: Mediaocean, Flashtalking, MOAT, Nielsen, Jira, Telmar</li>
                </ul>
              </div>
            </div>
            <a className="text-decoration-none" href="./OliverPayneCV.pdf" download><button className="btn btn-contact">Download CV</button></a>
          </div>
        </div>
        <div id="cvIcon" className="about--section--img">
          <FontAwesomeIcon icon={faIdCard} size="10x" color="#3D52A0"/>
        </div>
      </section>
    )
}