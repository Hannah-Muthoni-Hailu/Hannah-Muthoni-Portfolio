import { useState } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import Spearmint from '../assets/Spearmint.png';
import TextCopier from '../assets/TextCopier.png';
import BotSasa from '../assets/BotSasa.png';

export default function Projects() {
    const [modalContent, setModalContent] = useState({});
    const [showModal, setShowModal] = useState(false);

    const projects = [
        {
            'img': Spearmint,
            'name': 'Spearmint Dental Clinic',
            'shortDesc': 'A professional and minimalistic landing page for a dental clinic',
            'longDesc': 'I was contracted by Dr.Daisy of Spearmint Dental Clinic Nairobi to build a minimalistic landing page with appointment booking capabilites and a chatbot.',
            'techstack': [
                'React (Vite)',
                'ExpressJS',
                'Google Calendar API (For appointment booking)',
                'HuggingFace Inference Client (To implement the chatbot built on the DistilBert model)'
            ],
            'github': 'https://github.com/Spearmint-Dental-Clinic/Spearmint-Dental-Clinic',
            'url': 'https://spearmint-dental-clinic-1.onrender.com/'
        },
        {
            'img': TextCopier,
            'name': 'Text Copier',
            'shortDesc': 'An extension that allows the user to copy text from an image to their clipboard',
            'longDesc': 'This extensions allows users to take a screenshot of a piece of text and automatically copy it to their clipboard. It is especially useful for online students who need to copy text from video slides.',
            'techstack': [
                'HTML5 + CSS',
                'JavaScript',
                'HuggingFace Inference Client (To implement the chatbot built on Google\'s Gemma 5 model)'
            ],
            'github': 'https://github.com/Hannah-Muthoni-Hailu/Image-to-Text-Extension',
        },
        {
            'img': BotSasa,
            'name': 'BotSasa',
            'shortDesc': 'A website that allows web developers to automatically create a chatbot backend using just a text file',
            'longDesc': 'BotSasa is a website that allows web developers to quickly and easily add a chatbot to their websites. The BotSasa API is based on Google\'s DistilBert model, a SOA Question Answering model. BotSasa allows you to build a chatbot by simply providing a text document containing all the information you would like your customers to know about you, then let BotSasa handle the backend logic.',
            'techstack': [
                'React (Vite)',
                'Python (FastAPI)',
                'RESTful APIs',
                'HuggingFace Inference Client (To implement the chatbot built on Google\'s DistillBert model)'
            ],
            'github': 'https://github.com/Hannah-Muthoni-Hailu/BotSasa/tree/main',
            'url': 'https://botsasa-1.onrender.com/',
        },
    ]

    const handleOpen = (project) => {
        setModalContent(project);
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
        setModalContent({});
    }

    return(
        <Container fluid className="my-5" id="projects">
            <h1 className="sectionTitles">My Projects</h1>
            <div className="d-flex flex-direction-row flex-wrap justify-content-around mt-5 p-2">
                {projects.map((project) => {
                    return(
                        <div key={project.name} className="rounded projectCard p-3 pb-5 text-start mx-2 mb-4">
                            <h2 style={{ 'color': '#7FE0F6' }}>{project.name}</h2>
                            <p className="text-white mb-3" style={{ 'fontSize': '15px' }}>{project.shortDesc}</p>
                            <img src={project.img} alt={"Project image for " + project.name} className="projectImage" />
                            <Button className="mb-5 projectButton" onClick={() => handleOpen(project)}>See more</Button>
                        </div>
                    )
                })}
            </div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeVariant="white" closeButton className="modalContent text-white">
                    <Modal.Title>{modalContent.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalContent text-white">
                    <img src={modalContent.img} alt={"Project image for " + modalContent.name} className="w-100 border rounded-5" />
                    <div className="mt-4 px-1">
                        <p className="mb-4">{modalContent.longDesc}</p>
                        <h4>TechStack</h4>
                        <ul className="mb-4">
                            {modalContent.techstack?.map((stack) => {
                                return <li key={stack}>{stack}</li>
                            })}
                        </ul>
                        <Button className="mx-4 px-1 heroButton mb-2">
                            <a href={modalContent.github} className="text-decoration-none text-white">View Github <FontAwesomeIcon icon={faArrowAltCircleRight}/></a>
                        </Button>
                        {modalContent.url ?
                            <Button className="mx-4 px-1 heroButton mb-2">
                                <a href={modalContent.url} className="text-decoration-none text-white">View Live <FontAwesomeIcon icon={faArrowAltCircleRight}/></a>
                            </Button> : null
                        }
                        
                    </div>
                </Modal.Body>
            </Modal>
        </Container>
    )
}