import axios from "axios";
import { useEffect, useState } from "react";
import SingleProductCard from "./SingleProductCard";
import { addItem,addListItem,popListItem} from '../Store/action';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';

export default function Product(props){
    const product = props.match.params.id;
    // props.match.params.id
    console.log(product)
    const items=useSelector((state)=>state.items)
    const list=useSelector((state)=>state.list)
    console.log(list)
    const dispatcher=useDispatch()

    const addToCart=(prod)=>{
        prod.quant=0
        prod.quant=prod.quant+1
        dispatcher(addItem(prod))
        console.log(items)
    }
    
    



    const addWL=(prod)=>{
        dispatcher(addListItem(prod))
        console.log(prod)
    }
    const [prod, setProd] = useState({})

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${product}`)
        .then((res) => setProd(res.data))
        .catch((err) => console.log(err))
    },[])


    return (
        <> 
        
            <SingleProductCard title={prod.title} description={prod.description} src={prod.image} price={prod.price} ratte={prod.rating && prod.rating.rate} id={prod.id} add={() => addToCart(prod)} addWL={()=>addWL(prod)} />
        </>
    )
}