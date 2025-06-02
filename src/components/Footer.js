import React from 'react';
import './Footer.scss'
import './Template.scss'
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsFillSuitHeartFill } from 'react-icons/bs';


function Footer() {
    let currentDate = new Date(); 
    let currentYear = currentDate.getFullYear()

    return (
        <footer className='flex space-between'>
                <h4>
                © {currentYear} · Designed and developed with <BsFillSuitHeartFill /> and React by Niharika.
                </h4>
                <div className='flex socials'>
                     <a href="https://www.linkedin.com/in/niharika-sharma-0b5822b6/" rel="noreferrer" target='_blank'><BsLinkedin style={{ width: "32px", height: "32px", color: "#e1e1e1" }} alt="linkedin"/></a>
                     <a href="https://github.com/Niharika07" rel="noreferrer" target='_blank'><BsGithub style={{ width: "32px", height: "32px", color: "#e1e1e1"}} alt="mail"/></a>
                     <a href="mailto:niharika.sharma1596@gmail.com"><MdEmail style={{ width: "32px", height: "32px", color: "#e1e1e1" }} alt="mail"/></a>
                </div>
        </footer>
    );
};

export default Footer;