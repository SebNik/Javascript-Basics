//import React from 'react'

// const Sum = (props) => {
    // console.log(props)
    // let sum_a_b = parseInt(props.a) + parseInt(props.b)
    // console.log(sum_a_b)
    // console.log(props.children)
    // return <p>{sum_a_b}</p>
// }

//export default Sum

import React, { Component } from 'react'

class Sum extends Component {
    render() {
        return (
            <div>
                <h1>The Addition</h1>
                <h5>The following number will be added together: {this.props.a} and {this.props.b}</h5>
            </div>
        )
    }
}

export default Sum