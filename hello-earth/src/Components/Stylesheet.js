import React from 'react'
import './myStyle.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h2 className={className}>hello world</h2>
        </div>
    )
}

export default Stylesheet
