import 'bootstrap/dist/css/bootstrap.css';
import Button from "react-bootstrap/Button";
function AddNewThingToDo({setDoThings,inputValue,setInputValue,inputRef}){
    const addNewThingTooDo = () => {
        setDoThings(prevInputValue => [...prevInputValue, inputValue])
        setInputValue("")
        inputRef.current.value = ""
      }
    return(
        <Button onClick={addNewThingTooDo} variant="dark">
            add
          </Button>
    )
}
 export default AddNewThingToDo;