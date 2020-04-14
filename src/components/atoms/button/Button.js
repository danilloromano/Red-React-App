import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {

    render() {
        return (
        <div className="btn__wrapper">
            <button className="btn__default" onClick={this.props.handleClick}>
                {this.props.text}
            </button>
        </div>
        )
    }
}

export default Button;
