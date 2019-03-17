import React from 'react';
import colors from '../../../services/material-colors';

const withRed = (Component) => (props) => {
    const newProps = {...props, blue: true}
    return (
       <div>
           <Component {...newProps} />
           <div className="color-line">
            {
                Object.values(colors['blue']).map(color => {
                    return <div className="color" style= {{backgroundColor: color}} />;
                })
            }
           </div>
        </div>
    )
}

export default withRed;