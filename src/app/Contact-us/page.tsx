import { FaFacebook, FaInstagram , FaLinkedin } from "react-icons/fa6";


import { CiMail } from "react-icons/ci";



export default function Contactus() {
  return (
    <div className="contact-page">
      <div className="contact-details">
        <h1>Contact Me</h1>
        <p>
          I'd love to hear from you! Feel free to reach out using the form or
          connect via social links below:
        </p>

        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>

        <div className="social-icons">
          <a
            href="https://www.facebook.com/NOor591"
            target="_blank">
            <FaFacebook />

          </a>
          <a
            href="https://instagram.com/annonymouss_____"
            target="_blank">
                <FaInstagram />

            </a>
          <a
            href="https://www.linkedin.com/in/lareb-noor-9778a92b9"
            target="_blank"
            
          >
            <FaLinkedin />

          </a>
          <a href="mailto:larebnoor4@gmail.com" aria-label="Email">
          <CiMail />

          </a>
        </div>
      </div>
    </div>
  );
}
