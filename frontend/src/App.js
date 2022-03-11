import { useState } from 'react';
import './App.css';
import { Modal } from './components/Modal';
import { ShowPlay } from './components/ShowPlay';

function App() {
const [show ,setShow ] = useState(false)
const [Playlist,setPlaylist] = useState([])
//console.log(Playlist)


const addPlaylist = ({title})=>{
  
  let newObject ={
    id: Math.random()*1000,
    name: title,
    songs:[]
  }
  setPlaylist([...Playlist,newObject])
  setShow(false)
}

const handleShow=()=>{

  setShow(false)
}
  return (
    <div className="App">
     <h1 onClick={()=> setShow(!show)}>  new Playlist </h1>
     

     <Modal  show={show} handleShow={handleShow} addPlaylist={addPlaylist}/>
      
      <ShowPlay Playlist={Playlist}/>        
    </div> 
  ); 
}

export default App;
