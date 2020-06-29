import React from "react"

class ToDoItem extends React.Component{

    render(){

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
    const completedStyles ={
        fontSize: "1.5em",
        display:"flex",
        justifyContent: "space-between",
        alignItems:"center",
        borderBottom: "0.1em black solid",
        borderTop: "0.1em black solid",
        marginBottom: "0.5em",
        backgroundColor:"#800000",
        textDecoration:"line-through",
        color:"#f4f4f4",
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
    

        return(
            <div>
            <span  style={this.props.item.completed ? completedStyles : styles}  onClick={() => this.props.onClickHandler(this.props.id)} >
            <span style={box2}><input type = "checkbox" style={check} checked={this.props.item.completed} id="in" ></input></span>
            <span style={box}><label for="in" style={label}>{this.props.item.text} </label> </span>
            
            <br />
            </span>
            
            </div>
        )
    }
}

export default ToDoItem