import React,{useState,useEffect} from 'react';
import Scripts from './Scripts'
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

   

    return(
    // <form onSubmit={handleSubmit}>
    //     <input type="number" className="wheelable" style={{backgroundColor:"rgba(0, 0, 0, 0.0)"}} name="time" onChange={handleChange} ></input>
    //     <button type="submit">go</button>
    //    </form> 
    
    )
}

export default Form;