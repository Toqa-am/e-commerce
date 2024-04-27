import { useSelector, useDispatch } from "react-redux";
import { popListItem,addItem } from "../Store/action";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";

export default function WishList(){
    const list=useSelector((state)=>state.list)
    const items=useSelector((state)=>state.items)
    const[products,setProducts]=useState(list)
    useEffect(() => {
        setProducts(list)

      }, [list]);

    const dispatcher=useDispatch()

    const grouped = products.reduce((acc, item, index) => {
        const groupIndex = Math.floor(index / 3);
        if (!acc[groupIndex]) {
          acc[groupIndex] = [];
        }
        acc[groupIndex].push(item);
        return acc;
      }, []);

      const addToCart=(prod)=>{
        prod.quant=prod.quant+1
        dispatcher(addItem(prod))
        console.log(items)
    }

      console.log(list)
      const rmvWL=(prod)=>{
          dispatcher(popListItem(prod))
          prod.addWl=0
          // console.log(list)
          // // console.log(ind)
      }
    
        
    return (
        <>
        <div>
            {grouped.map((group, index) => (
                <div key={index} className="d-flex justify-content-around flex-wrap" style={{ display: 'flex' }}>
                {group.map((prod, productIndex) => (

                    <ProductCard
                    src={prod.image}
                    title={prod.title}
                    description={prod.description}
                    price={prod.price}
                    rating={prod.rating && prod.rating.rate}
                    id={prod.id}
                    add={()=>addToCart(prod)}
                    rmvWL={()=>rmvWL(prod)}

                />
                ))}
                </div>
            ))}
        </div>
        

    </>
    )
}