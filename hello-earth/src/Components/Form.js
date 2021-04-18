import React, { Component } from 'react'

export class form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: ''
             
        }
    }
    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }
    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
         })
    }
handleSubmit = event => {
    alert(`${this.state.uername} ${this.state.comments} ${this.state.topic}`)
   event.preventDefualt()
    
}

    render() {
        return (
            <form onSubmit= {this.handleSubmit}>
                <div>
                    <label>UserName: </label>
                    <input type =" text" value={this.username}
                     onChange = {this.handleUsernameChange}></input>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value = {this.state.comments}
                    onChange = {this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>
                        <select value = {this.state.topic} 
                        onChange={this.handleTopicChange}>
                        <option value='React'>React</option>
                        <option value= 'Angualr'>Angular</option>
                        <option value = 'Vue'>Vue</option>
                            
                        </select>
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default form
