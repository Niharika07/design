import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logo.png';

import './Navbar.css'

function Topnav() {
    let location = window.location.pathname;

    let work = <Nav.Link href="/design"> Work </Nav.Link>;
    let about = <Nav.Link href="/design/about"> About </Nav.Link>;

    if (location === "/design") {
        work = <Nav.Link href="/design" className='active-nav'> Work </Nav.Link>
    } else if (location === "/design/about") {
        about = <Nav.Link href="/design/about" className='active-nav'> About </Nav.Link>
    }

    return (
        // <Fade triggerOnce>
        <Navbar expand="lg" className="top-navbar" >
            
        
                <Navbar.Brand href="/design"><img src={Logo} style={{ width: "48px", height: "48px" }}  alt="logo"/></Navbar.Brand>
       
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav>
                        {work}
                        {about}
                    <Nav.Link eventKey={2}href="https://drive.google.com/file/d/1mVYxRcPENV1wWb0abrJgY9xceakHVGCm/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        // </Fade>
    );
};

export default Topnav;