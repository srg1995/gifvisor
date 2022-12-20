import React from "react"
import { Link } from "wouter"
import ListOfGif from "components/listOfGifs/index"
import Spinner from "components/spinner/index"
import { useGift } from "hooks/useGifs"

export default function SearchResults({params}){
    const { keyword } = params
    const {loading, gifs} = useGift({keyword})
    
    return <>
       
        {loading
            ? <Spinner/>
            :  <div><Link to={`/`}>Volver al GifVisor</Link> <ListOfGif gifs={gifs} /></div>
        }
    </>
}