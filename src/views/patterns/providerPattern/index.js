import React, {useState} from 'react';
import createContext from './contextAPI';
import MiddleComponent from './middleComponent';
import DeepComponent from './deepComponent';

import './styles.css';

export const Context = createContext();

export const ProviderPattern = () => {
    const [providerState, setContextProvider] = useState('red');
    const handleChange = (e) => {
        setContextProvider(e.target.value);
    };

    return (
      <Context.Provider value={{color: providerState}}>
          <div className="content-box">
              <h1>Hello, my name is Provider</h1>
              <Selector handleChange={handleChange} />
              <MiddleComponent>
                  <DeepComponent />
              </MiddleComponent>
          </div>
      </Context.Provider>
  );
};

function Selector({handleChange}) {
    return (
        <div>
            <p>change color:</p>
            <select onChange={handleChange} className="selector">
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="orange">Orange</option>
                <option value="blue">Blue</option>
            </select>
        </div>
    );
};
