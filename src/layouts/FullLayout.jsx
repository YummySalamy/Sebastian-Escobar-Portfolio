import React from 'react';
import Header from '../components/header/Header';
import AnimationParent from '../components/helpers/AnimationParent';
import FloatingButton from '../components/floating-button/FloatingButton';

const FullLayout = ({ children }) => {
    return (
        <div className="full-layout">
            <Header />
            {children}
            <FloatingButton />
        </div>
    );
};

export default FullLayout;
