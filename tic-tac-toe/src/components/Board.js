import React, {Component, component } from 'react';
import Square from './Square';

export default class Board estends Component {
    renderSquare(i) {
        return <Square value = {this.props.squares(i)}
        onClick={() => this.props.onClick(i)} />

    }
    render () {
        return {
            <div>
            <div className= " boarder-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            </div>
            <div className= " boarder-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            </div>
             <div className= " boarder-row">
             {this.renderSquare(0)}
             {this.renderSquare(1)}
             {this.renderSquare(2)}
             </div>
            
            </div>
        }
    }
}