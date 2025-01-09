import cv from '../assets/cv.webp'

export default function Experience() {
    return (
        <section id="experience" className="experience--section">
            <div className="portfolio--container--box">
                <div className="portfolio--container">
                    <p className="sub--title">Experience</p>
                    <h2 className="skills--section--heading">My CV</h2>
                </div>
            </div>
            <div className="experience--section--container">
                <div className="experience--section--card">
                    <div className="experience--section--card--img">
                    <img src={cv} alt="CV Logo"/>
                    <a href="./src/CV.pdf" download><button className="btn btn-primary">Download My CV</button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}