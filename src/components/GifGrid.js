import React, {useEffect, useState}  from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs';
import {GifGridItem} from '../components/GifGridItem';

export const GifGrid = ({category}) => {
    const  {data:images, loading} = useFetchGifs(category);

    //const [images, setImages] = useState([]);
    
     /*useEffect(() => {
        getGifs(category).then(setImages);
    }, [category])*/
    
    return (
        <>
        <h2> {category} </h2>
        {loading && <p className='card animate__animated animate__flash'>Loading...</p>}
       <div className='card-grid'>
           {images.map((img) =>(
         <GifGridItem 
         key={img.id}
         {...img} />
           ))}
           </div> 
        </>
    )
}
