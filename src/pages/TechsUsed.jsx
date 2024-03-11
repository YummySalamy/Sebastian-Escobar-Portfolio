import React from 'react';
import Grid from '../components/Grid';

import { FaReact } from "react-icons/fa6";
import { FaNodeJs, FaWhatsapp, FaPython } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiArduino, SiFirebase, SiGooglecloud, SiJavascript, SiTensorflow, SiTailwindcss, SiCss3 } from "react-icons/si";

const TechsUsed = () => {
    const techs = [
        {
            name: 'React',
            logo: <FaReact />,
        },
        {
            name: 'Node.js',
            logo: <FaNodeJs />,
        },
        {
            name: 'Tailwind CSS',
            logo: <SiTailwindcss />,
        },
        {
            name: 'Javascript',
            logo: <SiJavascript />,
        },
        {
            name: 'Arduino',
            logo: <SiArduino />,
        },
        {
            name: 'Firebase',
            logo: <SiFirebase />,
        },
        {
            name: 'Google Cloud',
            logo: <SiGooglecloud />,
        },
        {
            name: 'MySQL',
            logo: <DiMysql />,
        },
        {
            name: 'Python',
            logo: <FaPython />,
        },
        {
            name: 'Tensorflow',
            logo: <SiTensorflow />,
        },
        {
            name: 'CSS3',
            logo: <SiCss3 />,
        },
        {
            name: 'Whatsapp',
            logo: <FaWhatsapp />,
        },
    ];
    const isMobile = window.innerWidth < 768;

    return (
        <div>
            <Grid columns={isMobile ? 4 : 12}>
                {techs.map((tech, index) => (
                    <div key={index} className='tech'>
                        {tech.logo}
                    </div>
                ))}
            </Grid>
        </div>
    );
};

export default TechsUsed;
