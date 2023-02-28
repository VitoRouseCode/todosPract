import React from "react";
import { Link } from "react-router-dom";

class Clientes extends React.Component{
    constructor(props){
        super(props)
        this.state={
           usuarios:[]
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(datos=>this.setState({usuarios:datos}))
        .catch(erros=>console.log(erros))
    }
    render(){

        return(
            
            <div > {this.state.usuarios
                .map((u)=>{
                    return <Link to={`/Detalles/${u.id}`}><div>{u.name}</div></Link>})}</div>
        )
    }
}
export default Clientes;