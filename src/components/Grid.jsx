import React from 'react';

const Grid = ({children, columns}) => {
    return (
        <div className="grid-container" style={{gridTemplateColumns: `repeat(${columns}, 1fr)`}}>
            {children}
        </div>
    );
};

export default Grid;
