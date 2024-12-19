import ollie from "../assets/Ollie2.jpeg"
import { Link } from "react-scroll"

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Ollie</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Full Stack</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section-description">
                        Welcome to my page!
                    </p>
                    <Link
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="portfolio"
                        className="btn btn-primary"
                    >
                        See My Projects
                    </Link>
                </div>
            </div>
            <div className="hero--section--img">
                <img src={ollie} alt="Hero Section"/>
            </div>
        </section>
    )
}