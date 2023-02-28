import React from "react";

class HomeToDoDos extends React.Component{
    constructor(props){
    super(props)
     
    this.state ={ //de esta forma se escribe el estado en el componente de clase.
      count:0,
    }
    }
    //modificar el estado:
      aumentar=()=>{ //no se le coloca tipo de variable a la funcion
      this.setState({ //setState recibe una callback como segundo argumento. con ella se soluciona
                      //el delay que genera entre el cambio del satdo y su show.
      count:this.state.count+1
      
      },()=>{console.log(this.state.count)}); 
    }

    componentDidMount(){//cuando el componente se monta, luego se ejecuta esta funcion.
        console.log('me monte')
    }
    componentDidUpdate(){//cuando el componente se actualiza esta funcion se dispara
      console.log('me actualice')
    }
    componentWillUnmount(){//el componente se va a desmontar.
      console.log('el componente se desmonto')
    }

  
    render(){
        return(

          <div>
            {
                this.props.alumnos.map((a)=><p>{'nombres: '+a.name}</p>)
                
            }
            <div>{this.state.count}</div> {/* //this es necesario para reconocer la variable */}
            <button onClick={this.aumentar}> +</button>
          </div>


            )
    }
        
    
}
export default HomeToDoDos;