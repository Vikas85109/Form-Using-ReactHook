import React, { useState } from "react";

const App = () => {

  const [cvalue,setCvalue]=useState();
  const [fullName,setFullName]=useState();

  const value=(event)=>{
    setCvalue(event.target.value)
  }

const Update=()=>{
  setFullName(cvalue)

}



  return (
    <>
      <div className="main">
        <h1>Hello {fullName}</h1>
        <input onChange={value} type="text" name="" id="" />
        <div><button onClick={Update}>Click Me</button></div>
      </div>
    </>
  );
};

export default App;
