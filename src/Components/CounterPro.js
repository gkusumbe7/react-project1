import { useState } from "react";
import "./CounterPro.css"
import Navbar from "./Navbar";
function CounterPro(){
    
    // let count = 0; 
    // function inc(){
    //     count++;
    //     console.log(count);
    //     document.getElementById('counter-text').innerHTML = count;
    // }
   
    // function inc(){
    //     const counterElement = document.getElementById('counter-text');
    //     let count = parseInt(counterElement.innerHTML);
    //     count++;
    //     console.log(count);
    //  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [count, setCount] = useState(0) ;

  function inc(){

   setCount(count+1);
  }
  function dec(){

    setCount(count-1);
   }

   return(<>
   <Navbar/>
   <div className="text-heading"><h1>Example of useState </h1> </div>
   
   <div >
       <h2 className="app-heading">Simple counter</h2>
       <h3 className="counter-text" id="counter-text"> {count} </h3>
   </div>
    <div className="btn-container">
        <button className="btn btn-increment" onClick={inc}>+</button>
        <button className="btn btn-decrement" onClick={dec}>-</button>
        
    </div>

   </>
    );
}
export default CounterPro;
