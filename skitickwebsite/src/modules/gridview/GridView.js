// GridView.js
import React from 'react';
import './GridView.css';  // Import the CSS file

const GridView = ({ children }) => {
    // Clone each child and pass necessary props if needed
    const items = React.Children.toArray(children);

    return (
        <div className="grid-container">
            {items.map((item, index) => (
                <div key={index} className="grid-item">
                    {item}
                </div>
            ))}
        </div>
    );
};

export default GridView;
