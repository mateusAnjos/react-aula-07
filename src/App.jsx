import { useState } from 'react'
import "./App.css"

function App() {

const [numeros, setNumeros] = useState([])
const [inputValue, setInputValue] = useState('');

const handleChange = (event) => {
  setInputValue(event.target.value);
};

const handleClick = () => {
setNumeros([...numeros, inputValue]);
setInputValue('')
}


  return (
    <div className="content">
      <h1>Lista de números</h1>

        <input type="text" value={inputValue}  onChange={handleChange}/>

        <button  onClick={handleClick}>Clique</button>
     
      <ul>
        {numeros.map((numero, index) => <li key={index}>{numero}</li>)}
      </ul>
      
      
    </div>
  )
}

export default App
