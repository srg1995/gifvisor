import React from "react"
import Gif from '../Gif/index'

import './style.css'

export default function ListOfGif({gifs})
{
    return <div className="ListOfGifs">{
            gifs.map(singleGift => 
                <Gif 
                    key={singleGift.id}
                    title={singleGift.title} 
                    id={singleGift.id} 
                    url={singleGift.url}
                />
            )
        }
    </div>
}