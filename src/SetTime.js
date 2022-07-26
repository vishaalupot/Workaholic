import './App.css';
import React from 'react';
import {useState} from 'react'
import { realvalue } from './Time';



function SetTime(){

    const [pause, setPause]=useState(true)
    const [ min , setMin ] = useState(0);
    const [ sec , setSec ] = useState(0);
    const [ hrs , setHrs ] = useState(realvalue);

    if(hrs==="")
    {
        setHrs(100);
    }

    const liStyle = {}

    setTimeout(()=>{
        if(pause)
        {
            if(sec>0)
            {
              setSec(sec-1);
            }
            else if(sec===0)
            {
              setMin(min-1);
              setSec(59)
              if(min===0)
              {
                setMin(59);
                setHrs(hrs-1);
              }
            }
        }
      },1000)

  return (
    
    <div className="App">
      <h1>WEEK HOURS</h1>
      <div>
        <h2 className="hrs">{hrs} :</h2>
        <h3 style={{marginRight: '180px'}}>Hours</h3>
        <h2 className="mins">{min} :</h2>
        <h3 style={{marginLeft: '0px',marginRight: "180px"}}>Minutes</h3>
        <h2 className="secs">{sec}</h2>
        <h3 style={{marginLeft: '0px'}}>Seconds</h3>
        <button className="button1"
        onClick={()=>{
            setPause(false)
        }}>PAUSE</button>
        <button className="button2"
        onClick={()=>{
            setPause(true)
        }}>PLAY</button>

      </div>
    </div>
  );

};

export default SetTime;