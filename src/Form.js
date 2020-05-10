import React,{useState,useEffect} from 'react';

function Form(props){
    const [time,setTime]=useState(0);
    function handleChange(e){
        
        setTime(e.target.value);
        
        
    }
    
    function handleSubmit(e){
        e.preventDefault();
        props.onSubmit(time)
        //props.onSubmit(e.target.value)
    
    }


    useEffect(() => {
        // initiate the event handler
        window.addEventListener("wheel", handleChange);
    
        // this will clean up the event every time the component is re-rendered
        return function cleanup() {
          window.removeEventListener("wheel", handleChange);
        };
      });
    return(
    <form onSubmit={handleSubmit}>
        <input type="number" min="0" name="time" onChange={handleChange} ></input>
        <button className="sb" type="submit">set</button>
       </form> 
    
    )
}

export default Form;