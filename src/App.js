import React, { useState} from 'react';
import hourglass from './media/hourglass.gif'
import Form from "./Form"
import './index.css'
import Audio from './Audio'
const App=()=>{
//const [secs,setSecs]=useState(0);
const[value,setValue]=useState(0);
const[aud,isPlaying]=useState(false);
function handleSubmit(newValue){
 setValue(newValue)
 
 
 }

var secs=value

function startCountDown() {
  isPlaying(true)
 const  intervalHandle = setInterval(()=>{
  
    
    if (secs === 0) {
      isPlaying(false)
    clearInterval(intervalHandle);
    
    }
    

    setValue(secs--)
    
  }, 1000);
  
  }
  function reset(){
    setValue(0)
  }



return(
    <div style={{backgroundColor:"#ff9800"}} className="App">
      <h1 style={{color:"#bf360c", textAlign:"center"}}>Countdown timer</h1>
      {aud===true?<Audio/>:null}
      <Form value={value} onSubmit={handleSubmit}/>
      <h2>{secs} secs </h2>
      <button style={{height:"100px",width:"100px",borderRadius:50,marginTop:"100px"}}onClick={startCountDown}>start</button>    
      { secs!==0? null:<img style={{ marginLeft:"100px",height:"200px" }}src={hourglass} alt=":("/> }
      <button style={{ marginLeft:"100px", height:"100px",width:"100px",borderRadius:50}} onClick={reset}>reset</button>
</div>
      )
}

export default App;
