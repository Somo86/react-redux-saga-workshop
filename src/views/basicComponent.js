import React from 'react';
import {default as Utils} from '../utils/functionalUtils';
import './styles.css';

const colorList = ['#FF3D00', '#00B0FF', '#1DE9B6'];

class BasicStateFullComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            colorList: [],
            color: '',
        };
    }

    handleChangeColor(newColor) {
        this.setState({color: newColor})
    }

    componentDidMount() {
        Utils.delayExecution().then(() => {
            this.setState({colorList});
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.colorList.length === 0
                        ? <div className="content-box">
                            Estamos seleccionando los mejores colores para ti
                          </div>
                        : <div className="content-box">
                            <h3>Color seleccionado: {this.state.color ? this.state.color : 'ninguno'}</h3>
                            { this.state.colorList.map( color =>
                                <ColorBox
                                    key={`color_${color}`}
                                    color={color}
                                    changeColor={this.handleChangeColor.bind(this)}
                                />) }
                        </div>
                }
            </div>
        );
    }
}


class ColorBox extends React.Component {
    render() {
        return (
            <div
                className="color-card"
                style={{backgroundColor: this.props.color}}
                onClick={() => this.props.changeColor(this.props.color)}
            >
                {this.props.color}
            </div>
        )
    }
}

export default BasicStateFullComponent;