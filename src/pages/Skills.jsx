import html from '../assets/HTML-logo.png'
import css from '../assets/css-logo.png'
import javascript from '../assets/javascript-logo.png'
import php from '../assets/PHP-logo.png'
import java from '../assets/java-logo.png'
import python from '../assets/python-logo.png'
import csharp from '../assets/csharp-logo.png'
import sql from '../assets/sql-logo.png'

export default function Skills() {
    return (
        <section className="skills--section" id="skills">
            <div className="portfolio--container">
                <p className="section--title">My Skills</p>
            </div>
            <div className="skills--section--container">
                    <div className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={html} alt="Product Chain" width="100"/>
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">HTML</h3>
                        </div>
                    </div>
                    <div className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={css} alt="Product Chain" width="100"/>
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">CSS</h3>
                        </div>
                    </div>
                    <div className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={javascript} alt="Product Chain" width="100"/>
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">Javascript</h3>
                        </div>
                    </div>
                    <div className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={php} alt="Product Chain" width="100"/>
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">PHP</h3>
                        </div>
                    </div>
                    <div className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={java} alt="Product Chain" width="100"/>
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">Java</h3>
                        </div>
                    </div>
                    <div className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={python} alt="Product Chain" width="100"/>
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">Python</h3>
                        </div>
                    </div>
                    <div className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={csharp} alt="Product Chain" width="100"/>
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">C#</h3>
                        </div>
                    </div>
                    <div className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={sql} alt="Product Chain" width="100"/>
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">SQL</h3>
                        </div>
                    </div>
            </div>
        </section>
    );
}