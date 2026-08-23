// import { Container, Button } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
// import hero from '../assets/hero.png'
// import Me from '../assets/Me.jpg';
import React from "react";
import { Container, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";

export default function Home() {
    return(
        <section className="hero">
            <Container className="hero-content">
                <div className="availability-pill">
                <span className="availability-dot" />
                Available for select projects
                </div>

                <h1 className="hero-title">
                <span>Muthoni</span>
                <span className="hero-accent">Hailu</span>
                </h1>

                <div className="hero-footer">
                <p className="hero-kicker">
                    Creative developer &amp; digital designer
                </p>

                <Badge bg="transparent" className="hero-scroll">
                    SCROLL TO EXPLORE ↓
                </Badge>
                </div>
            </Container>
            </section>
    )
}
