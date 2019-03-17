import React from 'react';
import Color from './Color';
import './styles.css';

const ColorList = (props) => {
    const {needsChange} = props;

    return React.Children.map(props.children, child => {
        return React.cloneElement(child, {needsChange});
    });
}

ColorList.Red = Color('red');
ColorList.Blue = Color('blue');
ColorList.Yellow = Color('yellow');
ColorList.Green = Color('green');
ColorList.Orange = Color('orange');
ColorList.Amber = Color('amber');

export default ColorList;