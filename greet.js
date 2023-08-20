import React from 'react';

function greet({props}) {
 const{name,coursename} =props;
  return (
    <div>
        <h1>Hello my name is {name} and my coursename {coursename}</h1>
          {/* {props.children} */}
    </div>
  )
}

export default greet;




