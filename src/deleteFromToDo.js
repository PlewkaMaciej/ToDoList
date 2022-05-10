import 'bootstrap/dist/css/bootstrap.css';
import Button from "react-bootstrap/Button";
function DeleteFromToDo ({toDoThings, setDoThings, id}){
    const DeleteThingsFromToDoList = (e) => {
        let newList = toDoThings
        newList.splice(e.target.id,1);
        setDoThings([...newList])
      }
    return(
<Button id={id} onClick={DeleteThingsFromToDoList} className="DeleteButton" variant="light">X </Button>
    )
}
export default DeleteFromToDo;