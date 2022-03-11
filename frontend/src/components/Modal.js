import { useState } from 'react'
import './Modal.css'

export const Modal = ({  show,handleShow ,addPlaylist}) => {

    const [title,setTitle] = useState("")

    if (!show) return null
  
    return (
      <div className="Modal" >
        <div className="modal-content">
        
       <div className='i' onClick={ ()=> handleShow(show) }>x</div>
          <div  >
           <div className="title">New Playlist</div>

            <div className="content-wrap"> 
               <input
                 type="text"
                 placeholder="My Playlist"
                onChange={(e)=> {setTitle(e.target.value); console.log(title)}}
                 required
                 />

                <br /> 

                <button onClick={()=>addPlaylist({title})}>Create</button>
          </div>
      </div>
        </div>
      </div>
    )
  }



  
 