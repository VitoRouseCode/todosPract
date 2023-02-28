import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detalles= (props)=>{
        
        const[detalles,setDetalles]=useState({});

        const {id} = useParams() //este hook es para entrar en el params y usar sus objetos.ahora el id
        
        useEffect(()=>{
            
            /* fetch(`https://jsonplaceholder.typicode.com/users/${props.id}`) */
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res=>res.json())
            .then(datos=>setDetalles(datos))
            .catch(error=>console.log(error))

            },[Detalles])

    
    return(
        <><div>Detalles de usuario {detalles.name}</div><hr></hr>
            <div>nombre:{detalles.name}</div>
            <div>email:{detalles.email}</div>
            <div>telefono:{detalles.phone}</div>
        
        </>
    )
}

export default Detalles;