import React from 'react';
import {Context} from './index';
import Color from './Color';
import EvenDeeperComponent from './deeperComponent';

export const DeepComponent = () => {
    return (
        <Context.Consumer>
            {
                ({data}) => {
                    return (
                      <div>
                          <p>---------------------------------------------> First level</p>
                          <p>Hello I'm a deep Component</p>
                          <p>My color is: { data.color }</p>
                          <Color color={data.color}/>
                          <EvenDeeperComponent />
                      </div>
                    );
                }
            }
        </Context.Consumer>
    );
};

export default DeepComponent;
