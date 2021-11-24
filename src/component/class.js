import React,{Component} from "react";

class Hello extends React.Component{
    constructor(){
        super()
       this.state={
         message:"welcome my friend!!"
       }
    }
    changeContent(){
        this.setState({
                message:"Thanks my friend!"

         })
    }
    render(){

        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeContent()}>Click Me!</button>

            </div>
        )
    }
}
export default Hello;

/* destructuring of props and states

const Hello =(name,heroName) =>{
   
    return(
        <h1>{name}a.k.a{heroName}

    )
}

const Hello = props =>{
   const{name,heroName}=props
    return(
        <h1>{name}a.k.a{heroName}

    )
}

for class components
const{name,heroName}=this.props

*/
