import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const paths = [
    '/',
    '/projects',
    '/contact',
    '/resume',
];

const SlideButtons = () => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    const handleSlide = (direction) => {
        const currentIndex = paths.indexOf(currentPath);
        let newIndex = currentIndex + direction;
        if (newIndex < 0) {
            newIndex = paths.length - 1;
        } else if (newIndex >= paths.length) {
            newIndex = 0;
        }
        setCurrentPath(paths[newIndex]);
        window.history.pushState({}, '', paths[newIndex]);
        
    }

    useEffect(() => {
        window.addEventListener('popstate', () => {
            setCurrentPath(window.location.pathname);
        });
    }
    , []);

    return (
        <div>
            <Link to={currentPath}>
            <button 
                onClick={() => handleSlide(-1)}
                className='layout-left-slide-button'
            >
                <FaChevronLeft />
            </button>
            </Link>
            <Link to={currentPath}>
            <button 
                onClick={() => handleSlide(1)}
                className='layout-right-slide-button'
            >
                <FaChevronRight />
            </button>
            </Link>
        </div>
    );
};

export default SlideButtons;
