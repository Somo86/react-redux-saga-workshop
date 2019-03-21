import React from 'react';

const MiddleComponent = (props) => {
    return (
        <div>
            Hello I am the middle component. I'm useless, my only function is rendering my children!
            { props.children }
        </div>
    );
};

export default MiddleComponent;
