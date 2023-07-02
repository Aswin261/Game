import React,{useState} from 'react';
function Fun(props) {
    const [state,setState]=useState(0);
    const handleClick=()=>{
        setState(state+1)
      console.log(null)
    }
    return (  
        <div>
            <p><b>{props.name}</b>{state}
            </p>
            <button onClick={()=>handleClick()}>Inc</button>
        </div>
    );
}

export default Fun;