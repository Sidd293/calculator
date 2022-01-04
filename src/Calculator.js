import React from 'react'
import {useState,useEffect} from 'react';
import "./Calculator.css"


function Calculator() {
   const [s,setS] = useState("")
    const [id,setId] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12]);
    const [buttons,setButtons]  = useState({
        0:'0',
        1:'1',
        2:'2',
        3:'3',
        4:'4',
        5:'5',
        6:'6',
        7:'7',
        8:'8',
        9:'9',
        10:'+',
        11:'*',
        12:'-',
        
       
    })
    const btnclk =()=>
    {

    }
    
    return (
        <div className = "calci">
            <div className='txt'>CASIO</div>
                 <span onClick={()=>setS("")} className="screen" ><textarea value={s}></textarea></span>
                <div className = "button_container">
                  {id.map((m,i)=><button className = "buttons" onClick={()=>{setS(s=>s+buttons[i])}} ><h1>{`${buttons[i]}`}</h1></button>)}
                    <button className = "buttons" onClick={()=>setS("")}><h1>CE</h1></button>
                 <button className = "buttons" onClick={()=>setS(s=>eval(s))}><h1>=</h1></button>
                </div>
        </div>
    )
}

export default Calculator
