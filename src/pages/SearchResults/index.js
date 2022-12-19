import React from "react"
import ListOfGif from "../../components/ListOfGifs/index"
import Spinner from "../../components/Spinner/index"
import { useGift } from "../../hooks/useGifs"

export default function SearchResults({params}){
    const { keyword } = params
    const {loading, gifs} = useGift({keyword})
    
    return <>
        {loading
            ? <Spinner/>
            : <ListOfGif gifs={gifs} />
        }
    </>
}