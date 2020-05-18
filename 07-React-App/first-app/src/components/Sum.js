import React from 'react'

const Sum = (props) => {
    console.log(props)
    let sum_a_b = parseInt(props.a) + parseInt(props.b)
    console.log(sum_a_b)
    return <p>{sum_a_b}</p>
}

export default Sum