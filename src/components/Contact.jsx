import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
    return(
        <Container fluid className="text-center text-white ms-auto mb-5 mt-5" id="contact">
            <h1>Get In Touch</h1>
            <p>
                Like my work? <br /> Feel free to contact me through: <br />
                Email: <a href="mailto:muthonihannahhailu@gmailcom" className="text-white"><FontAwesomeIcon icon={faEnvelope}/> muthonihannahhailu@gmail.com</a> or
                Mobile: <a href="tel:+254703947330" className="text-white"><FontAwesomeIcon icon={faMobile}/> +254703947330</a>
            </p>
        </Container>
    )
}