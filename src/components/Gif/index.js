import React from 'react'
import 'components/gif/style.css'



export default function Gif({title, id, url}){

    const handleClick = evt => {
        console.log(evt.target.id)
    }


    return (
        <div onClick={handleClick} className='Gif'>
            <img id={id} alt={title} src={url} />
          </div>
    ) 
}