import React, {useState} from "react";
import {Link, useLocation} from 'wouter'
import ListOfGif from "components/listOfGifs";
import { useGift } from "hooks/useGifs";
import './style.css'

const POPULAR_GIFS = ['perro', 'gato', 'pez' ,'loro']

export default function Home(){
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGift()

    const handleSubmit = evt => {
        evt.preventDefault();
        pushLocation(`/search/${keyword}`)
    }
    const handleChange = evt =>{
        setKeyword(evt.target.value)
        console.log(evt)
    }

    return (
        <div className="home">
            <div>
                <h3>GIFVISOR</h3>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} id="name" type="text" placeholder='Introduce busqueda' value={keyword}/>
                </form>
                <ul>
                    {POPULAR_GIFS.map((popularGif)=>(
                        <li key={popularGif}>
                            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            
            <ListOfGif gifs={gifs}/>
            
        </div>
    )
}