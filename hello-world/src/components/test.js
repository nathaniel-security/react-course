import React, { Component } from 'react'
// import test_child from './test_child'




class Test extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         temp:false
      }
    }
    
   
render() {
    let message;
    let names = ['grumpy','nathaniel']
    if(this.state.temp)
    {
        message = <h1>Hello world</h1>
    }
    else{
        message = <h1>Hello {names[0]}</h1>
    }
    return (
        <h1>{message}</h1>
    )
}
}

export default Test