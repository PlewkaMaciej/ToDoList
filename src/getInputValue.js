
function GetInputValuee({setInputValue, inputRef}){
    
    const getInputValue = (e) => {
        setInputValue(e.target.value)
      }
    return(
        <input ref={inputRef} className="new-thingToDoInput" onChange={getInputValue} type="text" />
    )
}
export default GetInputValuee;