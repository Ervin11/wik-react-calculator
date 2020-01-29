import React, { Component } from 'react';
import '../App.css';

class Button extends Component {
    
    render() {
        return (
            <div className="btn" onClick={() => this.props.handleClick(this.props.children)}>{ this.props.children }</div>
        )
    }
}

export default Button;
