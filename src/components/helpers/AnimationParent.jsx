import React from 'react';
import { motion } from 'framer-motion';

const AnimationParent = ({ children, index }) => {
    const isIndexGreater = index > 0;
    const animationVariants = {
        hidden: {
            x: isIndexGreater ? '100%' : '-100%',
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={animationVariants}
        >
            {children}
        </motion.div>
    );
};

export default AnimationParent;
