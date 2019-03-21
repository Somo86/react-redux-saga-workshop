import React from 'react';
import {Context} from './index';
import Color from './Color';

export const DeeperComponent = () => {
    return (
        <Context.Consumer>
            {
                ({data}) => {
                    return (
                        <div>
                            <p>---------------------------------------------> Second level</p>
                            <p>I'm even deeper than deep Component</p>
                            <p>My color is: { data.color }</p>
                            <Color color={data.color}/>
                        </div>
                    );
                }
            }
        </Context.Consumer>
    );
};

export default DeeperComponent;
