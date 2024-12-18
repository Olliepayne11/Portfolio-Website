import cv from '../assets/cv.png'

export default function Experience() {
    return (
        <section id="experience" className="experience--section">
            <div className="portfolio--container--box">
                <div className="portfolio--container">
                    <p className="sub--title">Experience</p>
                    <h2 className="sections--heading">My CV</h2>
                </div>
            </div>
            <div className="experience--section--container">
                <div className="experience--section--card">
                    <div className="experience--section--card--img">
                        <img src={cv} al="CV Image" width="200"/>
                    </div>
                </div>
            </div>
        </section>
    )
}