import React, { useState } from 'react';
import Grid from '../components/Grid';

import { FaWhatsapp, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const contact_platforms = [
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/sebastian-escobar-55b5b9256/', icon: <FaLinkedin /> },
    { name: 'GitHub', link: 'https://github.com/YummySalamy', icon: <FaGithub /> },
    { name: 'Email', link: 'mailto:carsebastian1013@gmail.com', icon: <IoMdMail /> },
    { name: 'WhatsApp', link: 'https://wa.me/573216371230', icon: <FaWhatsapp />},
    { name: 'Phone', link: 'tel:+573216371230', icon: <FaPhone />},
];

const Contact = () => {
    const [platforms, setPlatforms] = useState(contact_platforms);
    const isMobile = window.innerWidth < 768;

    return (
        <div className='contact-me-container'>
            <h1>Contact Me</h1>
            <Grid columns={isMobile ? 2 : 5}>
                {platforms.map((platform, index) => (
                    <a key={index} href={platform.link} target='_blank' rel='noreferrer'>
                        {platform.icon}
                        <p>{platform.name}</p>
                    </a>
                ))}
            </Grid>
        </div>
    );
}

export default Contact;