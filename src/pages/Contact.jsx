import React from "react";
import Swal from "sweetalert2";

export default function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "56c8651f-9ac3-4383-aea2-32c6733420f1");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Message has been sent",
          icon: "success",
        });
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    return (
        <section id="contact" className="contact--section">
            <div className="portfolio--container--box">
                <div className="portfolio--container">
                    <p className="sub--title">Contact</p>
                </div>
            </div>
            <form className="contact--form--container" onSubmit={onSubmit}>
                <h4 className="skills--section--heading">Contact Me</h4>
                <div className="contact--input">
                    <label className="contact--label"><b>Full Name</b></label>
                    <input type="text" className="field" placeholder="Enter your name" name="name" required></input>
                </div>
                <div className="contact--input">
                    <label className="contact--label"><b>Email Address</b></label>
                    <input type="email" className="field" placeholder="Enter your email" name="email" required></input>
                </div>
                <div className="contact--input">
                    <label className="contact--label"><b>Your Message</b></label>
                    <textarea name="message" className="field-message" placeholder="Enter your message" required></textarea>
                </div>
                <button className="btn btn-contact" type="submit">Send</button>
            </form>
        </section>
    )
}