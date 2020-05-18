//import React from 'react'

// const Sum = (props) => {
    // console.log(props)
    // let sum_a_b = parseInt(props.a) + parseInt(props.b)
    // console.log(sum_a_b)
    // console.log(props.children)
    // return <p>{sum_a_b}</p>
// }

import React, { Component } from 'react'

class Sum extends Component {
    add () {
        console.log(this.props)
        this.sum_a_b = parseInt(this.props.a) + parseInt(this.props.b)
        console.log(this.sum_a_b)
        console.log(this.props.children)
    }

    render() {
        this.add()
        return (
            <div>
                <h1>The Addition</h1>
                <h5>The following number will be added together: {this.props.a} and {this.props.b}</h5>
                <h5>This results in the following sum: {this.sum_a_b}</h5>
            </div>
        )
    }
}

export default Sum