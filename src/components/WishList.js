import { useSelector, useDispatch } from "react-redux";
import CartCard from "./CartCard";
import { popListItem, delItem, popItem } from "../Store/action";
import ProductCard from "./ProductCard";

export default function WishList(){
    const list=useSelector((state)=>state.list)
    console.log(list)
    const dispatcher=useDispatch()
    const rmvWL=(prod,ind)=>{
        dispatcher(popListItem(ind))
        console.log(list)
    }
    const grouped = list.reduce((acc, item, index) => {
        const groupIndex = Math.floor(index / 3);
        if (!acc[groupIndex]) {
          acc[groupIndex] = [];
        }
        acc[groupIndex].push(item);
        return acc;
      }, []);

    
        
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
                    rmvWL={()=>rmvWL(prod,productIndex)}

                />
                ))}
                </div>
            ))}
        </div>
        

    </>
    )
}