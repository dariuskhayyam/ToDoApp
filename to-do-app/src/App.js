import React from "react"
import CheckList from "./components/checkList"
import Heading from "./components/Heading"
import Form from "./components/form"

class App extends React.Component{
    render(){
        return(
            
            <div>
            <Heading />
            <CheckList />
            </div>
            
        )
    }
}

export default App