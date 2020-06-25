import React from "react"
import ToDoItem from "./ToDoItem"
import ToDoData from "./ToDoData"

class CheckList extends React.Component{

  constructor(){
    super()
    this.state = {
      ToDos : ToDoData
    }
  }
  
  render(){
  let data = this.state.ToDos.map(item => <ToDoItem item={item}/>)

  return(
      <div>

      {data}

      </div>
  )
  }
}

export default CheckList