import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import List from "./List";
const App = () => {
  //code here
  const [name, setname] = useState("");
  const[list, setlist] = useState([]);

  const handleChange =(e) => {
    setname(e.target.value);
  }
  const handleOnClick =()=>{
    // setlist([...name, list])
    // list.push(name)
    setname("");
    setlist([...list, name])

  }

  
  return (
    <div id="main">
       <input id="input" onChange={handleChange} />
      <button id="button" value = {name} onClick={handleOnClick}>Click</button>
       <ul id="list">
      <List listx={list} />
      </ul>
    </div>
  )
}


export default App;