import React, { useState, useEffect } from "react";
import Box from "./components/box";
import "./App.css";

// hello

function App() {
const defaultState = {
  box1: "",
  box2: "",
  box3: "",
  box4: "",
  box5: "",
  box6: "",
  box7: "",
  box8: "",
  box9: "",
};
  const gameBoard = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box9"];
  // Set user 
  //flase x   true will o
  const [user, setUser] = useState(false);
  const [winner, setWinner] = useState("");
  const [obj, setObj] = useState(defaultState);

  useEffect(() => {
    // First row
    if (obj.box1 === obj.box2 && obj.box2 === obj.box3 && obj.box1 !== "") {
      setWinner("You win: " + obj.box1);
    }
    // Second row.
    else if(obj.box4 === obj.box5 && obj.box5 === obj.box6 && obj.box5 !== ""){
      setWinner("You win: " + obj.box4);
    }
    // Third row.
    else if(obj.box7 === obj.box8 && obj.box8 === obj.box9 && obj.box7 !== ""){
      setWinner("You win: " + obj.box4);
    }
    // First col.
    else if(obj.box1 === obj.box4 && obj.box4 === obj.box7 && obj.box1 !== ""){
      setWinner("You win: " + obj.box1);
    }
    // Second col.
    else if(obj.box2 === obj.box5 && obj.box5 === obj.box8 && obj.box2 !== ""){
      setWinner("You win: " + obj.box2);
    }
    // Third col.
    else if(obj.box3 === obj.box6 && obj.box6 === obj.box9 && obj.box3 !== ""){
      setWinner("You win: " + obj.box3);
    }
    //  Left Diag.
    else if(obj.box1 === obj.box5 && obj.box5 === obj.box9 && obj.box1 !== ""){
      setWinner("You win: " + obj.box1);
    }
    // Right Diag.
    else if(obj.box3 === obj.box5 && obj.box5 === obj.box7 && obj.box3 !== ""){
      setWinner("You win: " + obj.box3);
    }
    // Tie -> all filled; no winner found above.
    else if(obj.box1 !== "" && obj.box2 !== "" && obj.box3 !== "" && obj.box3 !== "" && obj.box4 !== ""
      && obj.box5 !== "" && obj.box6 !== "" && obj.box7 !== "" && obj.box8 !== "" && obj.box9 !== ""){
        setWinner("Tie Game!");
      }
  }, [obj]);

  const reset = () =>{
   setWinner("")
   setObj(defaultState)
  }
 
  return (
    <>
    {winner !== "" ? <> {winner} <button onClick={reset}>Play Again</button> </>: 
    <div className="App">
   
   
    {gameBoard.map(box => (
      <Box name={box} obj={obj} setObj={setObj} user={user} setUser={setUser} />
    ))}
  
    </div>}

    </>
  );
}

export default App;
