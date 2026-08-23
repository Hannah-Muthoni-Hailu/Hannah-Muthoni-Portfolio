// import { Container } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faMobile } from "@fortawesome/free-solid-svg-icons";

// export default function Contact() {
//     return(
//         <Container fluid className="text-center text-white ms-auto mb-5 mt-5" id="contact">
//             <h1>Get In Touch</h1>
//             <p>
//                 Like my work? <br /> Feel free to contact me through: <br />
//                 Email: <a href="mailto:muthonihannahhailu@gmailcom" className="text-white"><FontAwesomeIcon icon={faEnvelope}/> muthonihannahhailu@gmail.com</a> or
//                 Mobile: <a href="tel:+254703947330" className="text-white"><FontAwesomeIcon icon={faMobile}/> +254703947330</a>
//             </p>
//         </Container>
//     )
// }
import React from "react";
import { Container } from "react-bootstrap";
import "../styles/Contact.css";

const contactLinks = [
  {
    label: "Email",
    value: "muthonihannahhailu@gmail.com",
    href: "mailto:muthonihannahhailu@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "Muthoni Hailu",
    href: "https://www.linkedin.com/in/muthoni-hailu-hannah/",
  },
  {
    label: "GitHub",
    value: "Hannah Muthoni Hailu",
    href: "https://github.com/Hannah-Muthoni-Hailu",
  },
];

export default function Contact() {
  return (
    <section className="contact-section">
      <Container fluid className="px-3 px-md-4 px-lg-5">
        <div className="contact-top">
          <span className="contact-eyebrow">Get in touch</span>

          <span className="contact-number">05 — 05</span>
        </div>

        <div className="contact-main">
          <h2 className="contact-heading">
            Let's
            <br />
            <span>talk.</span>
          </h2>

          <div className="contact-links">
            {contactLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="contact-link"
                target={link.href === "#" ? "_blank" : undefined}
                rel={link.href === "#" ? "noreferrer" : undefined}
              >
                <span className="contact-link-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="contact-link-label">
                  {link.label}
                </span>

                <span className="contact-link-value">
                  {link.value}
                </span>

                <span className="contact-link-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>

        <footer className="contact-footer">
          <span>© 2026 Hannah Muthoni</span>
          <span>Designed &amp; developed with intention.</span>
        </footer>
      </Container>
    </section>
  );
}