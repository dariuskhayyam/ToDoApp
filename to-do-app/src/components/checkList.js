import React from "react"
import ToDoItem from "./ToDoItem"
import ToDoData from "./ToDoData"
import Form from "./form"
import uuid from 'uuid'

class CheckList extends React.Component{

  constructor(){
    super()
    this.state = {
      ToDos : [

    ]
    }
    //this.onClickHandler = this.onClickHandler.bind(this)
  }
  
  onClickHandler = (id) =>{
    this.setState(prevState =>{

      let updatedToDos = prevState.ToDos.map(todos =>{
        if(todos.id === id){
          todos.completed = !todos.completed
        }
        return todos
      })

      return{
        ToDos: updatedToDos
      }

      
    })
  } 

  submitHandler = (item) =>{
    // alert("this is good news")
    let newToDo = {
      id: this.state.ToDos.length -1,
      text: item,
      completed: false
    }
    this.setState({ToDos: [...this.state.ToDos, newToDo]})
    console.log(this.state)
  }



  render(){
  let data = this.state.ToDos.map(item =><ToDoItem item={item} 
  id={item.id} 
  onClickHandler={this.onClickHandler} />)

  return(
      <div>

      <Form submitHandler={this.submitHandler} />
      {data}

      </div>
  )
  }
}

export default CheckList