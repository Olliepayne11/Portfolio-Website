import ollie from "../assets/Ollie2.jpeg"

export default function Profile() {
    return (
        <section id="profile" className="profile--section">
            <div className="profile--section--img">
                <img src={ollie} alt="Ollie Image" width="300"/>
            </div>
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    <p className="section--title">About</p>
                    <h1 className="skills--section--heading">About Me</h1>
                    <p className="hero--section--description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                              Iusto, quidem illo nesciunt, eligendi soluta velit vero officiis veniam dolores natus nisi quasi veritatis non dicta inventore voluptates laboriosam a debitis?</p>
                    <p className="hero--section--description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>  
        </section>
    )
}