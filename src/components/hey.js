import React from 'react'

//function Hey() {
   // return <h1>Sup?</h1>
//}

const Hey = props => {
   console.log(props)
   return <h1>Hi guys {props.name} aka {props.superhero}</h1>
}
//const Hey = () => <h1>Sup?</h1>
export default Hey