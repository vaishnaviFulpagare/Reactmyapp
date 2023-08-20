import React from 'react'

function EventClick() {
    function clickhandler(){
        console.log("user click on Button")
    }
  return (
    <>
      <div>EventClick</div>
      <button onClick={clickhandler}>Click Me</button>
    </>
  )
}

export default EventClick
