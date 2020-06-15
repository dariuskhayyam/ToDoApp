import React from "react"

const styles = {
    fontSize: "1.5em",
    display:"flex",
    justifyContent: "center",
    borderBottom: "0.1em black solid",
    borderTop: "0.1em black solid",
    marginBottom: "0.5em",
    backgroundColor:"#800000",
}


function ToDoItem(){
    return(
        <span style={styles}>
        <input type = "checkbox" style={check}></input> Eat that pussy all day long 🤤 
        <br />
        </span>
    )
}

export default ToDoItem