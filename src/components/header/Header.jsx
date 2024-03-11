import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const headerLinks = [
    {
        name: 'About Me',
        path: '/'
    },
    {
        name: 'Projects',
        path: '/projects'
    },
    {
        name: 'Contact',
        path: '/contact'
    },
    {
        name: 'Resume',
        path: '/resume'
    }
];

const Hero = () => {
    const [elements, setElements] = useState(headerLinks);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 1) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }
    );


    return (
        <div className="header-container" style={{backgroundColor: hasScrolled ? '#2d2d2d' : 'transparent'}}>
            <ul className="header-list">
                {elements.map((element, index) => (
                    <li key={index}>
                        <Link to={element.path}>{element.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Hero;