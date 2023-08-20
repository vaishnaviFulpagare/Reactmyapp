import React from 'react'

function Child(props) {
  return (
    <>
      <div>ChildComponent</div>
      <button onClick={props.parenthandler('Child')}>Click ME</button>
    </>
  )
}

export default Child
