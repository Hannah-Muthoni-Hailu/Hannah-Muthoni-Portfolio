import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/logo.png'

export default function Navigation() {
    return(
        <Navbar style={{ 'backgroundColor': 'transparent' }} collapseOnSelect expand="md" variant="dark">
            <Container fluid className="px-4">
                <Navbar.Brand href="#home" className="w-25 text-start me-5 px-3">
                    <img src={logo} alt="Logo image" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ms-5 ps-5">
                        <Nav.Link href="#projects" className="text-white mx-3 text-nowrap">My Projects</Nav.Link>
                        <Nav.Link href="#education" className="text-white mx-3">Education</Nav.Link>
                        {/* <Nav.Link href="#skills" className="text-white mx-2">Skills</Nav.Link> */}
                        <Nav.Link href="#contact" className="text-white mx-3">Contact</Nav.Link>
                        <Button className="d-flex align-items-center px-3 text-nowrap downloadButton">
                            <a href="https://docs.google.com/document/d/1StudyXNgMrUZbW-P1EX_mfyQgQ3UoCk_/edit?usp=sharing&ouid=115064769298718409451&rtpof=true&sd=true" className="text-decoration-none text-white">View CV <FontAwesomeIcon icon={faDownload}/></a>
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}