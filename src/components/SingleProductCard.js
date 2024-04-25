import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { Link } from "react-router-dom/cjs/react-router-dom.min"


export default function SingleProductCard(props){
    

    let [inCart, setInCart] = useState(false);
    let [inList, setInList] = useState(false);
    const items=useSelector((state)=>state.items)
    const list=useSelector((state)=>state.list)
    console.log(list)
    console.log(items)
    
    const addToCart2=()=>{
            setInCart(true)

    }
    const rmv=()=>{
        setInList(false)

    }
    const addwl=()=>{
        setInList(true)

    }

    return (
        <>
            <div className="card mb-3 d-flex justify-content-around flex-wrap" style={{width: "100%", height:"80vh"}}>
                <div className="row g-0">
                    <div className="col-md-4 ">
                    <img src={props.src} style={{width: "100%", height:"80vh"}} />
                    </div>
                    <div className="col-md-8  d-flex align-self-center">
                    <div className="card-body ">
                        <h2 className="card-title">{props.title}</h2>
                        <p className="card-text fs-5">{props.description}</p>
                        <p className="card-text fs-5">Price: {props.price} EGP</p>
                        <div className="m-auto">
                        <table className="mx-auto"><tr>
                            <td><p className="card-text fs-5">{props.ratte}/5</p></td>
                            <td><div className="star text-warning fs-3">&#9733;</div></td>
                            
                            </tr> 
                            </table>

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
                            {/* <button className='btn btn-warning'>Add to cart</button> */}
                        </div>
                       
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}