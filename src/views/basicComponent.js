import React from 'react';
import {default as Utils} from '../utils/functionalUtils';

const colorList = ['red', 'blue', 'green'];

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
                        ? <div>
                            Estamos seleccionando los mejores colores para ti
                          </div>
                        : <div>
                            <p>Tienes este color seleccionado: {this.state.color}</p>
                            { this.state.colorList.map( color => <ColorBox key={`color_${color}`} color={color} changeColor={this.handleChangeColor.bind(this)} />) }
                        </div>
                }

            </div>
        );
    }
}


class ColorBox extends React.Component {
    render() {
        return (
            <div className="color_card" style={{backgroundColor: this.props.color}} onClick={() => this.props.changeColor(this.props.color)}>
                {this.props.color}
            </div>
        )
    }
}

export default BasicStateFullComponent;