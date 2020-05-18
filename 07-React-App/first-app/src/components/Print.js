import React from 'react'

//function Start(){
//    return <h1>Hello Niklas!</h1>
//}

const Print = (props) => {
    console.log(props)
return <h1>Hello {props.name}!</h1>
}

export default Print