import React from 'react';
import MousePosition from './MousePosition';
import Color from './Color';

const Red = Color('red');
const Blue = Color('blue');

const RenderProps = () => {
    return <MousePosition render={Red} />;
}

export default RenderProps;