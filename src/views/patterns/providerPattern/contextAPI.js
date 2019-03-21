import React from 'react';

//** It Produces similar behaviour as React Context
//** additionally it allows to be used in older React versions

export default function createContext() {
    let state;

    function ConsumerComponent(props) {
        const newProps = {...props, ...state};
        return (
            <div>
                { props.children({data: newProps}) }
            </div>
        )
    }

    function ProviderComponent(props = {}) {
        state = props.value;
        return (
            <div>
                { props.children }
            </div>
        );
    }

    return {
        Provider: ProviderComponent,
        Consumer: ConsumerComponent,
    }
}
