import React, { useState } from 'react';

const MainSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slider">
            <button onClick={handlePrev}>Previous</button>
            <img src={images[currentIndex]} alt="Slider Image" />
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default MainSlider;
