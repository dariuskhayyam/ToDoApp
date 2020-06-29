import React from "react"

const styles ={
    display: "flex",
    justifyContent: "flex-start",
    paddingBottom:"1rem",
}

class Form extends React.Component{

    constructor(){
        super()
        this.state = {
            input: ""
        }
      
    }

    changeHandler = (event) =>{
        this.setState({
            input: event.target.value
        })

        console.log(this.state.input)
    }

    onSubmit = (event) =>{
        event.preventDefault();
        // alert("HELLO THERE")
        this.props.submitHandler(this.state.input)
         this.setState({input:""})
    }

    render(){
        return(
            <div>
                <form style={styles} onSubmit={this.onSubmit}>
                    <input name="text" type="text" placeHolder="enter a To Do" onChange={this.changeHandler} value={this.state.input}/>
                    <button>submit</button> 
                </form>
            </div>
        )
    }
}

export default Form