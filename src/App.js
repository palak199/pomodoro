import React, { useState} from 'react';
import hourglass from './hourglass.gif'
import Form from "./Form"

const App=()=>{
//const [secs,setSecs]=useState(0);
const[value,setValue]=useState(0);


function handleSubmit(newValue){
 setValue(newValue)
 
 
 }

var secs=value

function startCountDown() {
  
 const  intervalHandle = setInterval(()=>{
  
    
    if (secs === 0) {
    clearInterval(intervalHandle);
    alert("timeup")
    }
    

    setValue(secs--)
    
  }, 1000);
  
  }
  function reset(){
    setValue(0)
  }

// useEffect(()=>{

// let interval=null;

// if(isRunning)
//  interval=setInterval(()=>{

//   setSecs(secs=>secs+1);
    

//  },1000);

// else if(!isRunning && secs!==0){
//   clearInterval(interval);
// }

// return ()=>clearInterval(interval)},[isRunning,secs,timeup])

return(
    <div style={{backgroundColor:"#ff9800"}} className="App">
      <h1 style={{color:"#bf360c", textAlign:"center"}}>are you ready to start?</h1>
      <div>
        
         <h2 style={{ marginLeft:"325px" }}>{secs} secs </h2>
         <button style={{marginLeft:"100px",height:"100px",width:"100px",borderRadius:50,marginTop:"100px"}}onClick={startCountDown} >start</button>
          
      </div>
      <img style={{marginLeft:"250px",height:"150px"}}src={hourglass} alt=":("/>
      <button style={{  height:"100px",width:"100px",borderRadius:50,marginTop:"100px"}} onClick={reset}>reset</button>
      <Form value={value} onSubmit={handleSubmit}/>
</div>
      )
}

export default App;
