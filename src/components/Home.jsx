import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import hero from '../assets/hero.png'
import Me from '../assets/Me.jpg';

export default function Home() {
    return(
        <Container id="home" fluid className="d-md-flex flex-row-reverse mt-md-5 mb-md-5 p-5">
            <div className="ps-5 pt-2 d-flex justify-content-center">
                <div className="blue-square ms-3 rounded-circle">
                    <img src={Me} alt="Professional headshot" className="overlay-image shadow-lg rounded-circle" />
                </div>
            </div>
            <div className="ps-1 mt-5 pt-5 text-md-start text-center">
                <p className="myName fs-4 m-md-0">Hi, my name is...</p>
                <h1 className="mt-2 nameH1">Hannah Hailu Muthoni</h1>
                <p className="text-white mb-3 pe-md-5">
                    I am a software engineer specializing in MERN stack and Python web development. I am focused on AI integration into websites through Hugging Face inference ensuring that your business is ready for the age of Artificial Intelligence.
                </p>
                <Button className="mx-2 px-0 heroButton mb-2">
                    <a href="#contact" className="text-decoration-none text-white">Work with me <FontAwesomeIcon icon={faArrowAltCircleRight}/></a>
                </Button>
                <Button className="mx-2 px-0 heroButton mb-2">
                    <a href="#projects" className="text-decoration-none text-white">See my work <FontAwesomeIcon icon={faArrowAltCircleRight}/></a>
                </Button>
            </div>
        </Container>
    )
}