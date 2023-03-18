import React from 'react';

const Plan = (props) => {
    return(
      <>  
        <li className='shadow list-items p-2 m-2 col-sm-9'>{props.value}
        <button onClick={()=>{props.sendData(props.id)}} className='btn btn-danger my-2 col-sm-2 offset-1'>X</button> 
        </li> 
      </>
    )
}

export default Plan