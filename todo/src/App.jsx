import { useState } from 'react'
import './App.css'

function App() {
  const [Todo, setTodo] = useState([]);
  const [inputValue, setInputValue]=useState("");

  const handleInput=(e)=>{
    setInputValue(e.target.value);
  };

  const handleEvent=(e)=>{
       e.preventDefault();
       setTodo([...Todo,inputValue]);
       setInputValue('');
  };

  return (
    <>
     <form>
       <input type="text" value={inputValue} onChange={handleInput}/>
       <button onClick={handleEvent}>add</button>
     </form>

    <ul>
      {
         Todo.map((val)=>{
                return(
                   <li>{val}</li>
                )
        })
      }
    </ul>
   </>  

  )
}

export default App
