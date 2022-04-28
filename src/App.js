import "./app.css"
import 'bootstrap/dist/css/bootstrap.css';
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from 'react';
function App() {
  const [toDoThings,setDoThings]=useState(["jablko"])
  return (
    <>
    <div className="mainContainer">
      <h1 className="title-heading">ToDoList</h1>
      <div className="paragraph-and-input-container">
        <p className="add-paragraph">Add thing to your list</p>
        <input className="new-thingToDoInput" type="text" />
        <Button variant="dark">
            add
        </Button>
      </div>
<div className="container-for-adding-elements">
{toDoThings.filter((value)=>{
  return <p>value</p>
})}
</div>
    </div>
    </>
  );
}

export default App;
