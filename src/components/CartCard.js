import React, { useState } from 'react';

import { Link } from "react-router-dom/cjs/react-router-dom.min"
export default function CartCard(props){
    const [showFullDescription, setShowFullDescription] = useState(false);
    
    
    const toggleDescription = (e) => {
        e.preventDefault()
        setShowFullDescription(!showFullDescription);
  };
    return(
        <>
        
        <div className="card mt-3" style={{width: "18rem"}}>
        <Link to={`/product/${props.id}`}>
            <img src={props.src} height={300} width={250} className="card-img-top prod-img" />
            <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            {showFullDescription ? (
                <p className="card-text">{props.description}</p>
            ) : (
                <p className="card-text">{props.description.substring(0, 100)}...</p>
            )}
            <a href='' onClick={toggleDescription}>
                {showFullDescription ? 'Read Less' : 'Read More'}
            </a>
            <p className="card-text">{props.price} EGP</p>
            <div>
            <table className="mx-auto"><tr>
                            <td><p className="card-text fs-5">{props.ratte}/5</p></td>
                            <td><div className="star text-warning fs-3">&#9733;</div></td>
                            
                            </tr> 
                            </table>
                        </div>

            <br></br>
            <p>{props.quant}</p>
           

            </div>
            </Link>
           <button className='btn btn-warning' onClick={(props.inc)}>+</button>
           <button className='btn btn-danger' onClick={(props.dec)}>-</button>
           
        
            

        </div>
        </>
    )
}