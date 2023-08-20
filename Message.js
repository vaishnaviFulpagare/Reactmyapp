import React, { Component } from 'react'

export class Message extends Component {
    constructor(){
        super()
        this.state={
            msg:'Welcom to ReactJs'
        }
        
    }
    click(){
       this.setState({
        msg:"Welcome to our React Tutorial"
       })
    }
  render() {
    return (
      <>
      <h1>{this.state.msg}</h1>
      <button onClick={()=>this.click()}>change</button>
      </>
    )
  }
}

export default Message
