import React from 'react'

const Sum = (props) => {
    console.log(props)
    let sum_a_b = parseInt(props.a) + parseInt(props.b)
    console.log(sum_a_b)
    console.log(props.children)
    return <p>{sum_a_b}</p>
}

export default Sum