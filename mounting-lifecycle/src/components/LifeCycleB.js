import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Ghanshyam'
        }
        console.log('LifeCycleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('LifeCycleB componentDidMount')
    }
    
    shouldComponentUpdate() {
        console.log('LifeCycleB shoouldComponentUpdate')
    }

    getSnapshotBeforeUpdate (prevProps, prevState) {
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate() {
        console.log('LifeCycleB componentDidUpdate')
    }
    render() {
        console.log(' LifeCycleB render')
        return (
            <div>
 
                <h1>LifeCycleB</h1>
            </div>
        )
    }
}

export default LifeCycleB