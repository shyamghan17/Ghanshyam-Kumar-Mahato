import React, { Component } from 'react'
export defualt class Game extends Component{
    constructor(props) {
        super(props);
        this.state={xIsNext: true,
        stepNumber: 0,
    history: [ {squares: Array (9).fill(null)} ]
    
    }
    }
    return () {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        return{

            <div className ="game">
            <div className= "game-board">
            <Board onClick = {(i) => this.onClick(i)}
            squares={current.squares} />
            </div>
            </div>
        }
    }
}