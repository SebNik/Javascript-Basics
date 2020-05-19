import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super (props)

        this.state = { count: 0 }
    }

    add() {
        // this.setState(
            // { count: this.state.count+1 },
            // () => {
                // console.log(this.state.count)
            // }
        // )
        this.setState( prevState => ({
            count: prevState.count+1
        }),
        console.log(this.state.count)
        )
    }

    addFive() {
        this.add()
        this.add()
        this.add()
        this.add()
        this.add()
    }

    render() {
        return (
            <div>
                <h5>The count - {this.state.count}</h5>
                <button onClick={() => this.addFive()}>button</button>
            </div>
        )
    }
}

export default Counter