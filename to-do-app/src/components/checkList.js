import React from "react"
import ToDoItem from "./ToDoItem"
import ToDoData from "./ToDoData"

class CheckList extends React.Component{
  
  render(){
  let data = ToDoData.map(item => <ToDoItem item={item}/>)

  return(
      <div>

      {data}

      </div>
  )
  }
}

export default CheckList