import React, { Component } from 'react'
import  Child from './Child'


class Parentcomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:"John"
      }
      this.parentOne=this.parentOne.bind(this)
    }
    parentOne(Childdata){
        alert(`Hello ${this.state.parentName} from ${Childdata}`)
        // alert("Hello"+this.state.parentName)
    }
    
  render() {
    return (
      <>
        <div>
            <Child parenthandler = {this.parentOne} />
        </div>
      </>
    )
  }
}

export default Parentcomponent
