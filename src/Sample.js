import React from 'react';

let Sample=(param)=>
{

  return(
      <div>
      <h2 style={{color:"yellow"}}>My name is {param.name} and key is {param.index}</h2>
      </div>
  	)
}

export default Sample;