import { useState, useEffect } from "react"
import { Link } from "react-scroll"

import logo from '../assets/logo.jpg'

export default function NavBar() {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    }

    const closeMenu = () => {
        setNavActive(false);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu;
            }
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu;
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active": ""}`}>
            <div>
                <img src={logo} alt="Logoipsum" width="50"/>
            </div>
            <a className={`nav__hamburger ${navActive ? "active" : ""}`} 
                  onClick={toggleNav}>
                <span className="nav__hamburger__line">

                </span>
                <span className="nav__hamburger__line">

                </span>
                <span className="nav__hamburger__line">

                </span>
            </a>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link onClick={closeMenu}
                              activeClass="navbar--active--content"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                              to="heroSection"
                              className="navBar--content">
                            Home
                        </Link>
                        <Link onClick={closeMenu}
                              activeClass="navbar--active--content"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                              to="MyPortfolio"
                              className="navBar--content">
                            Portfolio
                        </Link>
                        <Link onClick={closeMenu}
                              activeClass="navbar--active--content"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                              to="Profile"
                              className="navBar--content">
                            Profile
                        </Link>
                    </li>
                </ul>
            </div>
            <Link onClick={closeMenu}
                  activeClass="navbar--active--content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="Contact"
                  className="btn btn-outline-primary">
                Contact Me
            </Link>
        </nav>
    )
}