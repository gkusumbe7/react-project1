import { useState } from "react";
import Navbar from "./Navbar";
import "./Score.css";
function Score(){
    const [scoreA , setScoreA] = useState(0);
    const [scoreB , setScoreB] = useState(0);

    const [teamscoreA , setTeamscoreA] = useState(0);
    const [teamscoreB , setTeamscoreB] = useState(0);

    return(   
       <>
        <Navbar/>
        <div>
            <h1>Score Board</h1>
        
          <div className="score-card">
            <h2>Team A </h2>
            <h3>{scoreA}</h3>
            <button className="" onClick={()=>{
                   setScoreA(scoreA+1)
            }}
            >+</button>
            <button className="" onClick={()=>{
                if(scoreA == 0){
                    alert("Score can't be negative")
                }else{
                    setScoreA(scoreA - 1)
                }
                }}>-</button>
          </div>
          <div className="score-card">
            <h2>Team B</h2>
            <h3>{scoreB}</h3>
            <button className="" onClick={()=>{
                  setScoreB(scoreB + 1)                
            }}
            >+</button>
            <button className="" onClick={()=>{
                setScoreB(scoreB - 1)
            }}>-</button>
          </div>
       </div> 

       <div className="s-card">
           <div>
             <p className="score-h-name">Score Keeper </p> 
           </div>

           <div className="team-box">
               <div className="team-card">
                   <p className="t-name">Team A</p>
                   <p className="score">{teamscoreA}</p>
                     <button className="button inc" onClick={()=>{
                  setTeamscoreA(teamscoreA + 1)}}>+</button>
                     <button className="button dec" onClick={()=>{
                        if(teamscoreA == 0 ){
                            alert("score not negative")
                        }else{
                        setTeamscoreA(teamscoreA - 1)}
                     }}>-</button>   
                     <div></div>        
                </div>

               <div className="team-card">
                    <p className="t-name">Team B</p>                       
                    <p className="score">{teamscoreB}</p>
                     <button className="button inc" onClick={()=>{
                        setTeamscoreB(teamscoreB + 1)
                     }}>+</button>
                     <button className="button dec" onClick={()=>{
                        if(teamscoreB == 0){
                            alert("score not negative")
                        }else{
                        setTeamscoreB(teamscoreB - 1)
                    }
                     }}>-</button>
                        <div></div>
                </div>
            </div>
       </div>
        </>
    );
}
export default Score;
