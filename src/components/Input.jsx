import React, { useState } from 'react';

const Input = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <label htmlFor="inputField">Input:</label>
            <input
                id="inputField"
                type="text"
                value={value}
                onChange={handleChange}
            />
            <p>Value: {value}</p>
        </div>
    );
};

export default Input;
