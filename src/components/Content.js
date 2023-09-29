import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Content.css';
function Content() {

    const [images, setImages] = useState([]);
    const [limit,setLimit] = useState(20);
    useEffect(() => {
        
        axios.get(`https://jsonplaceholder.typicode.com/photos`)
            .then((result) => {
                setImages(result.data);
            })

    }, []);

    const handleLimit =()=>{
        setLimit( preLimit=> preLimit + 20)
      
    }

  return (
    <div className='container'>
        <div className='row'>
            {
                images.slice(0, limit).map((image,i)=>(
                    <div key={i} id='card-box' className='card ps-0 pe-0 py-0 col-12 col-lg-3 col-md-4 mb-3 mx-auto' style={{width:'320px'}}>
                            {/* <h2>{image.title}</h2> */}
                            <img className='img rounded-3' src={image.url} alt={image.albumId}></img>
                            <div className='info'>
                                <p className='p-2 mx-auto pt-5'>{image.title}</p>
                                <img className='mx-auto' src={image.thumbnailUrl} alt='thumbnail'></img>

                            </div>
                    </div>
                ))
            }
        <button className='btn btn-info mt-2 w-50 mx-auto'  onClick={handleLimit}>Load More <i class="fa-solid fa-spinner fa-spin" style={{color: '#ffff'}}></i></button>
        </div>
    </div>
  )
}

export default Content