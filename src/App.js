import {useState} from 'react'
import './App.css';


  
export default function App(){
const [val,setv] = useState(0);

  return (
    <div className="App">
      <p>{val}</p>
      <button onClick={() => setv(val+1)}>+</button>
      <button onClick={() =>  setv(val*0)}>Reset </button>
      <button onClick={() => setv(val-1)}>-</button>

      

    </div>
  );
  }

