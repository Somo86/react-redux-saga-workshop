import React, {useState} from 'react';
import ColorList from './ColorList';

const CompoundComponent = () => {
    const [needChange, toggleChange] = useState(false);

    return (
        <React.Fragment>
            <button onClick={handleClick(needChange, toggleChange)}>Change everything buddy!!!!</button>

            <ColorList needsChange={needChange}>
                <ColorList.Red />
                <ColorList.Orange />
                <ColorList.Yellow />
                <ColorList.Green />
                <ColorList.Blue />
                <ColorList.Amber />
            </ColorList>
        </React.Fragment>
    );
}

function handleClick(needChange, toggleChange) {
    return () => {
        toggleChange(needChange ? false : true)
    };
};

export default CompoundComponent;