import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { Link } from "react-router-dom/cjs/react-router-dom.min"
export default function ProductCard(props){
    const [showFullDescription, setShowFullDescription] = useState(false);
    let [inCart, setInCart] = useState(false);
    let [inList, setInList] = useState(false);
    const items=useSelector((state)=>state.items)
    const list=useSelector((state)=>state.list)
    
    const addToCart2=()=>{
            setInCart(true)

    }
    const rmv=()=>{
        setInList(false)

    }
    const addwl=()=>{
        setInList(true)

    }
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
           

            </div>
            </Link>
            {items.forEach(item => {
                if (item.id===props.id){
                    inCart=true
                }
                
        
             })}
            {inCart ? (
                <button  className="btn btn-warning" disabled >Already in cart</button>

            ) : (
                <button  className="btn btn-warning" onClick={()=>{props.add(); addToCart2();}}>Add to Cart</button>

            )}
            {list.forEach(litem => {
                if (litem.id===props.id){
                    inList=true
                }
                
        
             })}
            {inList ? (
            <button className="btn btn-info" onClick={()=>{props.rmvWL(); rmv();}}>Added to wish list</button>

            ) : (
                <button className="btn btn-info" onClick={()=>{props.addWL(); addwl()}}>Add to my wish List</button>

            )}
            

        </div>
        </>
    )
}