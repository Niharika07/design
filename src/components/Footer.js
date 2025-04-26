import React from 'react';
import './Footer.scss'
import './Template.scss'
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsFillSuitHeartFill } from 'react-icons/bs';


function Footer() {
    let currentDate = new Date(); 
    let currentYear = currentDate.getFullYear()

    return (
        <footer className='flex space-between'>
                <h4>
                © {currentYear} · Designed and developed with <BsFillSuitHeartFill /> and React by Niharika.
                </h4>
                <div><div className='flex socials'>
                    <a href="https://www.linkedin.com/in/niharika-sharma-0b5822b6/" rel="noreferrer" target='_blank'><FaLinkedin style={{ width: "32px", height: "32px", color: "#e1e1e1" }} alt="linkedin"/></a>
                    <a href="mailto:niharika.sharma1596@gmail.com"><IoMdMail style={{ width: "32px", height: "32px", color: "#e1e1e1" }} alt="mail"/></a>
                </div></div>
        </footer>
    );
};

export default Footer;