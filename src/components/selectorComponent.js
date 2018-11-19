import React from 'react';
import './selectStyles.css';

export default function Selector(props) {
    return (
        <select className="select">
            <option>Show all</option>
            {
                props.options.map(option =>
                    <option>
                        { option }
                    </option>
                )
            }
        </select>
    );
}
