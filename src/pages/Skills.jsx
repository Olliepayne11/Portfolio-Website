import html from '../assets/HTML-logo.jpg'
import css from '../assets/css-logo.jpg'
import javascript from '../assets/javascript-logo.jpg'
import php from '../assets/PHP-logo.jpg'
import java from '../assets/java-logo.jpg'
import python from '../assets/python-logo.jpg'
import csharp from '../assets/csharp-logo.jpg'
import sql from '../assets/sql-logo.jpg'

import react from '../assets/react-logo.jpg'
import redux from '../assets/redux-icon.jpg'
import jquery from '../assets/jquery-logo.webp'
import bootstrap from '../assets/bootstrap-logo.jpg'

export default function Skills() {
    return (
        <section className="skills--section" id="skills">
            <div className="portfolio--container">
                <p className="section--title">Skills</p>
                <h1 className="skills--section--heading">Languages & Frameworks</h1>
            </div>
            <div className="skills--section--container">

                    {/* Languages Below */}
                    <div className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={html} alt="Product Chain" width="75"/>
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">HTML</h3>
                        </div>
                    </div>
                    <div className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={css} alt="Product Chain" width="75"/>
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">CSS</h3>
                        </div>
                    </div>
                    <div className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={javascript} alt="Product Chain" width="75"/>
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">Javascript</h3>
                        </div>
                    </div>
                    <div className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={php} alt="Product Chain" width="75"/>
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">PHP</h3>
                        </div>
                    </div>
                    <div className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={java} alt="Product Chain" width="75"/>
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">Java</h3>
                        </div>
                    </div>
                    <div className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={python} alt="Product Chain" width="75"/>
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">Python</h3>
                        </div>
                    </div>
                    <div className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={csharp} alt="Product Chain" width="75"/>
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">C#</h3>
                        </div>
                    </div>
                    <div className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={sql} alt="Product Chain" width="75"/>
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">SQL</h3>
                        </div>
                    </div>

                    {/* Frameworks Below */}

                    <div className="skills--section--card--framework">
                        <div className="skills--section--img">
                            <img src={react} alt="Product Chain" width="75"/>
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">React</h3>
                        </div>
                    </div>
                    <div className="skills--section--card--framework">
                        <div className="skills--section--img">
                            <img src={redux} alt="Product Chain" width="75"/>
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">Redux</h3>
                        </div>
                    </div>
                    <div className="skills--section--card--framework">
                        <div className="skills--section--img">
                            <img src={jquery} alt="Product Chain" width="75"/>
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">jQuery</h3>
                        </div>
                    </div>
                    <div className="skills--section--card--framework">
                        <div className="skills--section--img">
                            <img src={bootstrap} alt="Product Chain" width="75"/>
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">Bootstrap</h3>
                        </div>
                    </div>
            </div>
        </section>
    );
}