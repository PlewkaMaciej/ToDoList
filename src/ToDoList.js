import "./App.css"
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useRef } from 'react';
import AddNewThingToDo from "./addNewThingToDo";
import DeleteFromToDo from "./deleteFromToDo";
function ToDoList() {
  const inputRef = useRef()
  const [toDoThings, setDoThings] = useState(["jablko"])
  const [inputValue, setInputValue] = useState()
  
  const getInputValue = (e) => {
    setInputValue(e.target.value)
  }
 
  return (
    <>
      <div className="mainContainer">
        <h1 className="title-heading">ToDoList</h1>
        <div className="paragraph-and-input-container">
          <p className="add-paragraph">Add thing to your list</p>
          <input ref={inputRef} className="new-thingToDoInput" onChange={getInputValue} type="text" />
          <AddNewThingToDo setDoThings={setDoThings} inputValue={inputValue} setInputValue={setInputValue} inputRef={inputRef} />
        </div>
        <div className="container-for-adding-elements">
          {toDoThings.map((value, id) => {
            return <div className="value-and-button-for-delete" key={id}> <p>{value}</p> <DeleteFromToDo toDoThings={toDoThings} setDoThings={setDoThings} id={id}/></div>
          })}
        </div>
      </div>
    </>
  );
}

export default ToDoList;