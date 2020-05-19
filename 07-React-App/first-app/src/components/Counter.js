import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super (props)

        this.state = { count: 0 }
    }

    click() {
        this.setState(
            { count: this.state.count+1 }
        )
        console.log(this.state.count)
    }

    render() {
        return (
            <div>
                <h5>The count - {this.state.count}</h5>
                <button onClick={() => this.click()}>button</button>
            </div>
        )
    }
}

export default Counter