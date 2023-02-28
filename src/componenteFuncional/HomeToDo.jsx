import style from './HomeToDo.module.css';
import { useEffect, useState } from 'react';

function HomeToDo ({alumnos}){

    const [contador,setContador]=useState(0); // asi se establece el estado inicial en componenetes funcionales
    
    const aumenta = ()=>{ // asi se usa setState= se define arriba la funcion que hace el set
        setContador(contador+1)
    }

    useEffect(()=>{ //de esta menera se emula la funcion componentDidMount : se ejecuta callback luego del montaje del componente
        console.log('el componenete se monto funcion')
        console.log(contador)
    },[contador])

    useEffect(()=>{ // sin corchetes-de esta ,manera se emula la funcion componentDidUpdate: se ejecuta la callback, cuando el cpmponente se actualiza
        console.log('me actualice funcion')
    })


    return(

        <div className={style.caja}>{
        alumnos.map((a)=>
        <p className={style.nombres}>{a.name+',edad: '+ a.age}</p>
        )
        }
        <div>{contador}</div>
        <button onClick={aumenta}>mas</button>
        </div>
    )
}

export default HomeToDo;