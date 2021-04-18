import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            message: 'HELLO'
             
        }
        this.clickHaldler = this.clickHaldler.bind(this)
    }
    clickHaldler(){
        this.setState({
            message: 'GoodBye! '
        })

    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick = {this.clickHaldler}>Click</button>
                
            </div>
        )
    }
}

export default EventBind
