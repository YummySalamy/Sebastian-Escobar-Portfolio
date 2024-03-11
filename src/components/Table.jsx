import React, { useState } from "react";

const Table = ({elements}) => {
    const [tableElements, setTableElements] = useState(elements);

    return (
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Path</th>
                    </tr>
                </thead>
                <tbody>
                    {tableElements.map((element, index) => (
                        <tr key={index}>
                            <td>{element.title}</td>
                            <td>{element.path}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;