// import { Navbar, Container, Nav, Button } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDownload } from "@fortawesome/free-solid-svg-icons";
// import logo from '../assets/logo.png'

// export default function Navigation() {
//     return(
//         <Navbar style={{ 'backgroundColor': 'transparent' }} collapseOnSelect expand="md" variant="dark">
//             <Container fluid className="px-4">
//                 <Navbar.Brand href="#home" className="w-25 text-start me-5 px-3">
//                     <img src={logo} alt="Logo image" />
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                     <Nav className="ms-auto ps-5">
//                         <Nav.Link href="#projects" className="text-white mx-3 text-nowrap">My Projects</Nav.Link>
//                         <Nav.Link href="#education" className="text-white mx-3">Education</Nav.Link>
//                         {/* <Nav.Link href="#skills" className="text-white mx-2">Skills</Nav.Link> */}
//                         <Nav.Link href="#contact" className="text-white mx-3">Contact</Nav.Link>
//                         {/* <Button className="d-flex align-items-center px-3 text-nowrap downloadButton">
//                             <a href="https://docs.google.com/document/d/1WA4BDBtjFPEXjlg3UCe7yaelJktq98svUa6kuwT0ssg/edit?usp=sharing" className="text-decoration-none text-white">View CV</a>
//                         </Button> */}
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     )
// }
import React, { useState } from "react";
import "./Navigation.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = () => {
    setIsOpen(false);
  };

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <a
        href="#home"
        className="site-nav-logo"
        onClick={handleNavigate}
      >
        HM<span>.</span>
      </a>

      {/* Desktop navigation */}
      <div className="site-nav-links">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="site-nav-link"
          >
            {item.label}
          </a>
        ))}
      </div>

      <a href="#contact" className="site-nav-cta">
        Let's talk
        <span>↗</span>
      </a>

      {/* Mobile menu button */}
      <button
        type="button"
        className={`site-nav-toggle ${
          isOpen ? "is-open" : ""
        }`}
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span />
        <span />
      </button>

      {/* Mobile menu */}
      <div
        className={`site-nav-mobile ${
          isOpen ? "is-open" : ""
        }`}
      >
        <div className="site-nav-mobile-links">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="site-nav-mobile-link"
              onClick={handleNavigate}
            >
              <span>0{index + 1}</span>
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="site-nav-mobile-contact"
          onClick={handleNavigate}
        >
          Let's talk ↗
        </a>
      </div>
    </nav>
  );
}
