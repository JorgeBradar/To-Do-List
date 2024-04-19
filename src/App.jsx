import { useEffect, useState } from 'react'
import './App.css'
function App() {
  let [textoInput, actualizarTextoInput] = useState("");
  let [listadoDeTareas, actualizarListadoDeTareas] = useState([]);
  function manejadorDeEventoOnChange(evento){
    actualizarTextoInput(evento.target.value);
  }
  function manejadorDeEventoOnKeyDown(evento){
    if(evento.key === "Enter"){
      let nuevoArray = Array.from(listadoDeTareas);
      nuevoArray.push(textoInput);
      actualizarListadoDeTareas(nuevoArray);
      actualizarTextoInput("");
    }
  }
  function manejadorDeEventoOnClick(indice){
    let nuevoArray = Array.from(listadoDeTareas);
    nuevoArray.splice(indice, 1);
    actualizarListadoDeTareas(nuevoArray);
  }
  return (
    <>
      <h1>Listado tareas</h1>
      <input type="text" value={textoInput} onChange={manejadorDeEventoOnChange} onKeyDown={manejadorDeEventoOnKeyDown}/>
      <ul>
        {
          listadoDeTareas.map((tarea, index)=> {
            return <li key={index}>{tarea} <button onClick={()=> manejadorDeEventoOnClick(index)}>X</button></li>
          })
        }
      </ul>
    </>
  )
}
export default App