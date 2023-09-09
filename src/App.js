import logo from './logo.svg';
import './App.css';
import {useState} from 'react' 


const App = () => {
  const [name,setName] = useState('')
  const onChangeName = (event) => setName(event.target.value)
  return (
  <div>
    <input type='text' value={name} onChange={onChangeName} />
    <p>{name}</p>
  </div>

)}

export default App;
