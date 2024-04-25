import { useSelector, useDispatch } from "react-redux";
import CartCard from "./CartCard";
import { incItem, delItem, popItem } from "../Store/action";

export default function Cart(){
    const items=useSelector((state)=>state.items)
    let cart=useSelector((state)=>state.cart)
    const dispatcher=useDispatch()

    const grouped = items.reduce((acc, item, index) => {
        const groupIndex = Math.floor(index / 3);
        if (!acc[groupIndex]) {
          acc[groupIndex] = [];
        }
        acc[groupIndex].push(item);
        return acc;
      }, []);

      const inc=(prod,ind)=>{
        dispatcher(incItem(1))
        prod.quant=prod.quant+1
        }

        const dec=(prod,ind)=>{

            if (prod.quant===1||prod.quant===0){
                console.log(prod.quant+"quant from dec")
                prod.quant=prod.quant-1

                dispatcher(popItem(ind))
            }
            else if(prod.quant>1){
                prod.quant=prod.quant-1
                dispatcher(delItem(1))
            }
            return prod.quant;

            }
    return (
        <>
        <div>
            {grouped.map((group, index) => (
                <div key={index} className="d-flex justify-content-around flex-wrap" style={{ display: 'flex' }}>
                {group.map((prod, productIndex) => (
                    console.log(prod.quant+"quant from map"),
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
        </div>
        

    </>
    )
}