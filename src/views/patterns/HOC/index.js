import React from 'react';
import withRed from './withRed';
import withBlue from './withBlue';
import withYellow from './withYellow';
import {compose} from 'redux';

import './styles.css';

const HOCPattern = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Colors applied:</h1>
            { <p className={props.red ? 'applied' : 'unapplied'}>Red</p> }
            { <p className={props.blue ? 'applied' : 'unapplied'}>Blue</p> }
            { <p className={props.yellow ? 'applied' : 'unapplied'}>Yellow</p> }
        </div>
    );
}

export default compose (
    withRed,
    withBlue,
    withYellow
)(HOCPattern);