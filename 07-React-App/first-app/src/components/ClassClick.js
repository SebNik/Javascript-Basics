import React, { Component } from 'react'

export class ClassClick extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hi!"
        }

        this.clickHandler = this.clickHandler.bind(this)
    }
    

    clickHandler(){
        this.setState(
            { message: "Bye!" }
        )
    }
    
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default ClassClick
