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
            <form className="contact--form--container" onSubmit={onSubmit}>
                <h4>Contact Form</h4>
                <div className="input-box">
                    <label>Full Name</label>
                    <input type="text" className="field" placeholder="Enter your name" name="name" required></input>
                </div>
                <div className="input-box">
                    <label>Email Address</label>
                    <input type="email" className="field" placeholder="Enter your email" name="email" required></input>
                </div>
                <div className="input-box">
                    <label>Your Message</label>
                    <textarea name="message" className="field-message" placeholder="Enter your message" required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </section>
    )
}