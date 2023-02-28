import { useEffect, useState } from "react";

const Formularios=()=>{

    const [form,setForm]=useState('');
    const [error,setError]=useState('');


    const handleSubmit=(event)=>{
        event.preventDefault()
        setForm({
            ...form,
            email:'',
            nombre:''
        })
    }

    const validarMail=(event)=>{
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)||!form.email){
            setError({
                ...form,
                email:''
            })
        }else{
            setError({
                ...form,
                email:'hey guey el email no es valido, cambialo'
            })
        }
    }

    useEffect(()=>{
        validarMail()
    },[form])

        const handleForm=(evento)=>{
            const nombre= evento.target.name;
            const valor= evento.target.value;
            setForm({
                [nombre]:valor
            })
        }

        return(
            <>
                <div>Formulario digital</div><br></br>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nombre">ingresar nombre: </label><br></br>
                    <input onChange={handleForm} autoComplete="off" name="nombre" type="text" /><br></br>
                    <label htmlFor="email"> ingresa el email: </label>
                    <br></br>
                    <input onChange={handleForm} autoComplete="off" name="email" type='text'/><br></br>
                    {error.email?error.email:''}<hr></hr>
                    <button>
                        <input type='submit'></input>
                    </button>
                </form>
            </>
        )
    }


export default Formularios;