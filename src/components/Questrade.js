import React from 'react';
import './Password.scss';
import { FaLock } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";



function Questrade() {

    return (
        <div className='password-page'>
            <a href="/" className='back-button'><IoArrowBackOutline/></a>
            <div className='contents'>
                <div className='lock'><FaLock/></div>
                <div><h1>Password please!</h1>
                    <p>This page is protective. If you'd like to learn more, please reach out to me!</p></div>
                <div className='password-form'>
                    <input type="password" placeholder='Password'/>
                    <button> Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Questrade;