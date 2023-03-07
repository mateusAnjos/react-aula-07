import { useState } from 'react'
import "./App.css"

function App() {

const [numero, setNumero] = useState([])
const [message, setMessage] = useState('');

const handleChange = (event) => {
  setMessage(event.target.value);
};

function handleClick(event){
  
setNumero([...numero, message]);

}


  return (
    <div className="content">
      <h1>Lista de números</h1>

        <input type="number" name="num" id='num' onChange={handleChange}/>
        <button  onClick={handleClick}>Clique</button>
     
      <ul>
        {numero.map(numero => <li >{numero}</li>)}
      </ul>
      
      
    </div>
  )
}

export default App
