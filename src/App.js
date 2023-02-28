
import './App.css';
import HomeToDo from './componenteFuncional/HomeToDo';
import HomeToDoDos from '../src/componenteClase/HomeToDoDos';
import Productos from './paginas/Productos';
import { Route,Link } from 'react-router-dom';
import Clientes from './clientes/Clientes'
import Detalles from './detalles/Detalles';
import Formularios from './formularios/Formularios';

function App() {
 const alumnos=[
 {
    name:'victor',
    age:'15',    
 },
 {
  name:'juan',
  age:'22'
 },
 {
  name:'esteban',
  age:'55'
 }
 ]

 

  return (
    <div className="App">
      
      <Route path='/'><div>Home</div>
      <div><Link to='/alumnos'>Alumnos</Link></div>
      <div><Link to='/Productos'>Productos</Link></div>
      <div><Link to='/'>Home</Link></div><hr></hr>
      <div><Link to='/Clientes'>Clientes</Link></div>
      <div><Link to='/Formulario'>Formulario</Link></div>
      </Route>
      
      <Route path='/alumnos'><HomeToDo  alumnos={alumnos} /></Route>
      <Route path='/alumnosDos'><HomeToDoDos alumnos={alumnos}/></Route>
      <Route path='/Clientes'><Clientes /></Route>
       
      <Route path='/Formulario'><Formularios/></Route>
      <Route path='/Productos'><Productos/></Route>

      {/* //primera forma de hacerlo, capturar Id */}
      {/* <Route  path='/Detalles/:id' render={({match})=><Detalles id={match.params.id}/>}></Route> */}
      {/* //segunda manera de hacerlo, captura id con un hook. useParams() */}
      <Route path='/Detalles/:id' component={Detalles}/>
      
      
    </div>
  );
}

export default App;
