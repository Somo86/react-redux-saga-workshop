import React from 'react';
import colors from '../../../services/material-colors';

const Color = (colorProp) => (mouse) => {
    return (
        <div className="color-line" style={{position: 'absolute', top: mouse.y, left: mouse.x}}>
           {
               Object.values(colors[colorProp]).map(color => {
                    return <div className="color" style= {{backgroundColor: color}} />;
               })
           }
        </div>
    );
}

export default Color;