import React, {useState} from 'react';

const MousePosition = (props) => {
    const [coord, setCoord] = useState({x: 0, y: 0});

    return (
        <div style={{ height: '100vh', width: '100%' }} onMouseMove={handleMouseMove(setCoord)}>
         {props.render(coord)}
        </div>
      );
}

function handleMouseMove(setCoord) {
    return (event) => {
        setCoord({
            x: event.clientX,
            y: event.clientY
        });
    };
}

export default MousePosition;