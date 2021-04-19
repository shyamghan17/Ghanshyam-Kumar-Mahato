import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Ghanshyam'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }
    
    shouldComponentUpdate() {
        console.log('LifecycleA shoouldComponentUpdate')
    }

    getSnapshotBeforeUpdate (prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }
    changeState=() => {
        this.setState(
            {
                name: 'CodeEvulation'
            }
        )
    }
    render() {
        console.log(' LifecycleA render')
        return (
            <div>
 
                <h1>LifeCycleA</h1>
                <button onClick = {this.changeState}>Change State</button>
                <LifeCycleB></LifeCycleB>
            </div>
        )
    }
}

export default LifeCycleA
