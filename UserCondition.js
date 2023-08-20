import React, { Component } from 'react'

 class UserCondition extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         logInn: true
      }
    }

    render(){
     //short circuit oprator
     return this.state.logInn && <h2>login successfull...!</h2>
    }


    //Ternary operator conditional
    //  return(this.state.logInn) ? <h1>UserCondition statement</h1> :<h2>Hello World...!</h2>
    

    //element variables
    //     let text;
    //     if(this.state.logInn){
    //        text= <div>UserCondition statement</div>
    //     }
    //     else{
    //        text= <div>Hello World...!</div>
    //     }
    //     return(<h1>{text}</h1>)
    // }

   
    //if else-return
//   render() {
//     if(this.state.logInn){
//         return<div>UserCondition statement</div>
//     }
//     else{
//        return <div>Hello World..!</div>
//     }
   
//   }
// }
 }
export default UserCondition
