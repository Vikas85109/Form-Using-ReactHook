import React, { useState } from "react";

const App = () => {

  const [cvalue,setCvalue]=useState("");
  const [fullName,setFullName]=useState("");
  const [lastName,setLastName]=useState("");
  const [lastNamenew,setLastNamenew]=useState("");

  const value=(event)=>{
    setCvalue(event.target.value)
  }

  const Newvalue=(event)=>{
    setLastName(event.target.value)
  }

const Update=(event)=>{
  event.preventDefault();
  setFullName(cvalue)
  setLastNamenew(lastName);

}



  return (
    <>
      <div className="main">
        <form onSubmit={Update}>
        <h1>Hello {fullName}  {lastNamenew}</h1>
        <input style={{marginTop:"20px"}} onChange={value} type="text" name="" id="" placeholder="Enter Your Text" value={cvalue}/><br />
        <input style={{marginTop:"20px"}} onChange={Newvalue} type="text" name="" id="" placeholder="Enter Your Lastname" value={lastName}/>
        <div><button type="submit">Click Me</button></div>
        </form>
      </div>
    </>
  );
};

export default App;
