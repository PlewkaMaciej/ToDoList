import "./app.css"
import 'bootstrap/dist/css/bootstrap.css';
import Button from "react-bootstrap/Button";
import React, { useState, useRef } from 'react';
function App() {
  const inputRef=useRef()
  const [toDoThings, setDoThings] = useState(["jablko"])
  const [inputValue, setInputValue] = useState()
  const [clearInput, setClearInput] = useState(0)
  const getInputValue = (e) => {
    setInputValue(e.target.value)
  }
  const addNewThingToDo = () => {
    setDoThings(prevInputValue => [...prevInputValue,inputValue])
    console.log(toDoThings)
    setInputValue("")
    inputRef.current.value=""
  }

  return (
    <>
      <div className="mainContainer">
        <h1 className="title-heading">ToDoList</h1>
        <div className="paragraph-and-input-container">
          <p className="add-paragraph">Add thing to your list</p>
          <input ref={inputRef} className="new-thingToDoInput" onChange={getInputValue} type="text" />
          <Button onClick={addNewThingToDo} variant="dark">
            add
          </Button>
        </div>
        <div className="container-for-adding-elements">
          {toDoThings.map((value,id) => {
            return <div className="value-and-button-for-delete" key={id}> <p>{value}</p> <Button className="DeleteButton" variant="light">X </Button></div>
          })}
        </div>
      </div>
    </>
  );
}

export default App;
