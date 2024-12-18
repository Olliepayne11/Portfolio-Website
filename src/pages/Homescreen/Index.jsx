import HeroSection from "../HeroSection";
import Skills from "../Skills";
import AboutMe from "../AboutMe";
import Portfolio from "../Portfolio";
import Experience from "../Experience";
import Contact from "../Contact"
import Footer from "../Footer"

export default function Home () {
    return (
        <>
            <HeroSection />
            <Skills />
            <AboutMe />
            <Portfolio />
            <Experience />
            <Contact />
            <Footer />
        </>
    )
}