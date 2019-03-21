import React from 'react';
import colors from '../../../services/material-colors';

const Color = (props) => {
    return (
        <div className="color-line">
           {
               Object.values(colors[props.color]).map(color => {
                    return <div className="color" style= {{backgroundColor: color}} />;
               })
           }
        </div>
    );
};

export default Color;
