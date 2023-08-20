import React, { Component } from 'react'

export class EventClass extends Component {
  clickhandler(){
    console.log("This is event class");
  };
  render() {
    
    return (
      <>
      <div>EvenClass</div>
      <button onClick={this.clickhandler}>Click Me</button>
      </>
    )
  }
}

export default EventClass



