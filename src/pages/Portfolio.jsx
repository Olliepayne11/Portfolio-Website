import { Link } from 'react-scroll'
import gazetteer from '../assets/Gazetteer-Screenshot.png'
import companyDirectory from '../assets/CompanyDirectory-Screenshot.png'

export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolio--section">
            <div className="portfolio--container--box">
                <div className="portfolio--container">
                    <p className="sub--title">Portfolio</p>
                    <h1 className="skills--section--heading">My Projects</h1>
                </div>
                <div className="portfolio--github--div">
                    <a href="https://github.com/Olliepayne11" target="_blank"><button className="btn btn-github">
                        Visit my github
                    </button></a>
                </div>
            </div>
            <div className="portfolio--section--container">
                <div className="portfolio--section--card">
                    <div className="portfolio--section--img">
                        <a href="https://gazetteerapp.oliverrpayne.co.uk/" target="_blank"><img id="gazetteer-image" className="rounded" src={gazetteer} alt="Project 1 Image"/></a>
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
                        <a href="https://companydirectory.oliverrpayne.co.uk/" target="_blank"><img id="gazetteer-image" className="rounded" src={companyDirectory} alt="Project 2 Image"/></a>
                    </div>
                    <div className="portfolio--section--card--content">
                        <div>
                            <h3 className="portfolio--section--title">Company Directory</h3>
                            <br></br>
                            <p className="text-md"><b>Company Directory</b> is an application that allows the user to manipulate a database which holds information, such as the employees, departments and locations of a company.
                                                      Any changes to the database which are requested through the UI follow the rules of CRUD operations, meaning that the data management is efficient and user-friendly.
                                                      For the application to be able to run these processes, I used a series of AJAX calls to PHP routines which included SQL queries to manipulate the database.
                                                      I then included some popups to notify the user that the database has been updated.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}