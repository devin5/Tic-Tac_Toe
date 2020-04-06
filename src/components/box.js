import React, { useState } from "react";

const Box = ({user, setUser, name, setObj, obj, setWinner}) => {

  const [checked, setChecked] = useState("");

  const checkBox = () => {

    if(user){
        setChecked("O")
    }else{
        setChecked("X")
    }
 
    if(user){
        setObj({...obj, [name]: 'O'})
    }else{
        setObj({...obj, [name]: 'X'}) 
    }
    
    setUser((user) => !user )


  };

  
  return (
    <div onClick={checked === "" ? checkBox : null} id="box">
      {checked}
    </div>
  );
};
export default Box;
