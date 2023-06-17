import Navbar from "./Navbar";
import "./Score.css";
function Score(){
    return(
        <>
        <Navbar/>
        <div>
            <h1>Score Board</h1>
        
          <div className="score-card">
            <h2>Team A </h2>
          </div>
          <div className="score-card">
            <h2>Team B</h2>
          </div>
       </div> 
        </>
    );
}
export default Score;
