import React from "react"

const styles = {
    fontSize: "1.5em",
    display:"flex",
    justifyContent: "space-between",
    alignItems:"center",
    borderBottom: "0.1em black solid",
    borderTop: "0.1em black solid",
    marginBottom: "0.5em",
    backgroundColor:"#800000",
}
const check = {
    display:"flexbox",
    justifyContent:"flex-start",
    alignItems:"center",
    marginRight:"10em",
}
const label ={
    display:"flex",
    alignItems:"center",
    justifyContent:"flex-end",
    marginLeft:"1em",
}
const box ={
    display:"flex",
    justifyContent:"flex-end",
}
const box2 ={
    display:"flex",
    justifyContent:"flex-start",
}

function ToDoItem(props){
    return(
        <span style={styles}>
        <span style={box2}><input type = "checkbox" style={check} id="in"></input></span>
        <span style={box}><label for="id" style={label}>{props.item}</label> </span>
        <br />
        </span>
    )
}

export default ToDoItem