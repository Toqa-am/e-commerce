import { useSelector, useDispatch } from "react-redux";
import CartCard from "./CartCard";
import {  popItem } from "../Store/action";
import { useEffect,useState } from "react";

export default function Cart(){
    const items=useSelector((state)=>state.items)
    const signed=useSelector((state)=>state.signed)
    const[products,setProducts]=useState([])
    console.log(products.length+"hbhkv")
    let total=0
    let taxes=0
    const dispatcher=useDispatch()
    useEffect(() => {
        setProducts(items)

      }, [items]);

    function confirm(){
      if(signed===1){
        alert("Your Order have been confirmed")
      }
      else{
        alert("You're Not Signed in, please Sign in first!")

      }
    }

      
              
        products.map((prod) => (
          total=total+(Number(prod.price)*Number(prod.quant))
        ))





    const grouped = products.reduce((acc, item, index) => {
        const groupIndex = Math.floor(index / 3);
        if (!acc[groupIndex]) {
          acc[groupIndex] = [];
        }
        acc[groupIndex].push(item);
        return acc;
      }, []);

      const inc=(prod,ind)=>{
        setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === prod.id
          ? { ...product, quant: product.quant + 1 }
          : product
      )
    );

        }

        const dec=(prod,ind)=>{
            if(prod.quant===1){
                dispatcher(popItem(ind))
                const neww =products.filter((product) =>product.id!==prod.id)
                setProducts(neww)
            }
            
            else{
                setProducts((prevProduct) =>
                prevProduct.map((product) =>
            
                product.id === prod.id && product.quant > 1
                ? { ...product, quant: product.quant - 1 }
                : product
            )
            );
            }
            }

            
    return (
        <>
        <div>
            {grouped.map((group, index) => (
                <div key={index} className="d-flex justify-content-around flex-wrap" style={{ display: 'flex' }}>
                {group.map((prod, productIndex) => (
                    <CartCard
                    src={prod.image}
                    title={prod.title}
                    description={prod.description}
                    price={prod.price}
                    rating={prod.rating && prod.rating.rate}
                    quant={prod.quant}
                    id={prod.id}
                    inc={()=>inc(prod,productIndex)}
                    dec={()=>dec(prod,productIndex)}
                />
                ))}
                </div>
            ))}
            

            <div className={"border border-warning "+(products.length===0 ? "invisible":"visible")}>
              {console.log(products.length+"dvfdvdf")}
              Total products price=
              
              {total}
              <br></br>
              Taxes:
              
              {taxes =total*14/100}
              <br></br>
              Total:
              {total+taxes}
              <br></br>
              <button className="btn btn-warning" onClick={()=>confirm()}>confirm purchasing</button>
            </div>
        </div>
        

    </>
    )
}