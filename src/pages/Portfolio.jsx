import earth from '../assets/earth-icon.png'
import project2 from '../assets/project-icon.png'

export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolio--section">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <p className="sub--title">Portfolio</p>
                    <h2 className="section--heading">My Projects</h2>
                </div>
                <div>
                    <button className="btn btn-github">
                        Visit my github
                    </button>
                </div>
            </div>
            <div className="portfolio--section--container">
                <div className="portfolio--section--card">
                    <div className="portfolio--section--img">
                        <img src={earth} alt="Project 1 Image"/>
                    </div>
                    <div className="portfolio--section--card--content">
                        <div>
                            <h3 className="portfolio--section--title">Gazetteer</h3>
                            <p className="text-md">Decription of first project.</p>
                        </div>
                    </div>
                </div>
                <div className="portfolio--section--card">
                    <div className="portfolio--section--img">
                        <img src={project2} alt="Project 1 Image"/>
                    </div>
                    <div className="portfolio--section--card--content">
                        <div>
                            <h3 className="portfolio--section--title">Gazetteer</h3>
                            <p className="text-md">Decription of first project.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}