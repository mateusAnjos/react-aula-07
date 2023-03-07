import { useState } from 'react'
import "./App.css"

function App() {

const [numero, setNumero] = useState([])
const [message, setMessage] = useState('');

const handleChange = (event) => {
  setMessage(event.target.value);
  console.log(message)
};

const handleClick = () => {
setNumero([...numero, message]);

setMessage('')
console.log(numero)
}


  return (
    <div className="content">
      <h1>Lista de números</h1>

        <input type="text" value={message}  onChange={handleChange}/>

        <button  onClick={handleClick}>Clique</button>
     
      <ul>
        {numero.map((numero, index) => <li key={index}>{numero}</li>)}
      </ul>
      
      
    </div>
  )
}

export default App
