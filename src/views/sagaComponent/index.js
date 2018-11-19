import React from 'react';
import { toPairs } from 'ramda';
import {connect} from 'react-redux';
import { componentDidMount } from 'react-functional-lifecycle';
import { getColorListAction } from './action';
import Service from '../../services/color-service';
import Select from '../../components/selectorComponent';
import './styles.css';

const ReduxComponent = (props) => {
    const categories = Object.keys(props.colorList);

    return (
        <section>
            <Select options={ categories } />
            <div className="color-block">
                {
                    Object.values(props.colorList).map((color, i) => (
                        <div className="color-box" key={`color_${ color }`}>
                            <h4>{ categories[i] }</h4>
                            <div>
                                <ColorBox colors={ color } />
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );

};

function ColorBox(props) {
    const listToPairs = toPairs(props.colors);
    return (
        listToPairs.map(color => (
            <div key={`color_detail_${ color }`} className="detail" style={{backgroundColor: color[1]}}>
                <p>{ color[0] }</p>
            </div>
        ))
    );
}

function functionalComponentDidMount(props) {
    props.getColorList();
}

function mapStateToProps(state) {
    return {
        colorList: state.sagaComponent.colorList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getColorList: () => dispatch(getColorListAction()),
    }
}

export default
connect(mapStateToProps, mapDispatchToProps)
(componentDidMount(functionalComponentDidMount)(ReduxComponent));
