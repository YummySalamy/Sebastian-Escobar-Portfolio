import React from "react";
import { RiMessage3Line } from "react-icons/ri";

const FloatingButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className="floating-button">
            <RiMessage3Line />
        </button>
    );
};

export default FloatingButton;