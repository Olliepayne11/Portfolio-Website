import { Link } from 'react-scroll'
import earth from '../assets/earth-icon.png'
import project2 from '../assets/project-icon.png'

export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolio--section">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <p className="sub--title">Portfolio</p>
                    <h1 className="skills--section--heading">My Projects</h1>
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
                        <a href="https://gazetteerapp.oliverrpayne.co.uk/" target="_blank"><img src={earth} alt="Project 1 Image"/></a>
                    </div>
                    <div className="portfolio--section--card--content">
                        <div>
                            <h3 className="portfolio--section--title">Gazetteer</h3>
                            <br></br>
                            <p className="text-md"><b>Gazetteer</b> is a web app designed to work across mobile & desktop devices.
                                                     The app allows users to choose any country in the world, to which specific data will be shown in the form of modals, as well as individual markers on the map.
                                                     Examples of data included are: <b>Weather Forecast, Local News, Country Population, Capital City, Airports, Earthquakes etc. </b>
                                                     Information shown on the UI is gathered through API requests using AJAX calls to PHP routines, utilising cURL to retrieve this information.
                                                     Then the formatted JSON response data is used to display a variety of information to the user.</p>
                        </div>
                    </div>
                </div>
                <div className="portfolio--section--card">
                    <div className="portfolio--section--img">
                        <img src={project2} alt="Project 1 Image"/>
                    </div>
                    <div className="portfolio--section--card--content">
                        <div>
                            <h3 className="portfolio--section--title">Project 2</h3>
                            <p className="text-md">Decription of second project.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}