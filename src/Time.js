import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import './App.css'
export let realvalue=""



 const Time=()=>{
     
    const [value,setValue]=useState('');
    const navigate =useNavigate();

    const click= event =>{
        event.preventDefault();
        realvalue=value;
        navigate("/time")
    };

    return(
        <div className="AskBg">
          <div className="Title">
              Be Proud to be a Workaholic
            </div>
              <h5 className="formText">How many hours do you want to work ?</h5>  
              <form> 
              <input type="text" className="text1" placeholder="Hours..." onChange={event => setValue(event.target.value)} ></input>     
              <button className="button3" onClick={click}>Submit</button>
              </form>
        </div>
    );

};


export default Time;