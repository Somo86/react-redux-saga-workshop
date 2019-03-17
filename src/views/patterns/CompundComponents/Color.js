import React from 'react';
import colors from '../../../services/material-colors';

const RedColor = (colorProp) => (props) => {
    return (
        <div className="color-line">
           {
               Object.values(colors[colorProp]).map(color => {
                    return <div className={`color ${props.needsChange ? 'large' : ''}`} style= {{backgroundColor: color}} />;
               })
           }
        </div>
    );
}

export default RedColor;