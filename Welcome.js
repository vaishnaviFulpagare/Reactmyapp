import React, { Component } from 'react'

class Welcome extends Component {
  
  render() {
    const {name,coursename}= this.props
    return (
      
      <div> This is Welcome class component
        <h1>Hello,my name is {name} and my course {coursename}</h1>
      </div>
    )
  }
}

export default Welcome




