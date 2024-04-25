
import { useEffect, useState } from "react"
import axios from "axios"
import ProductCard from "./ProductCard"
import { changeCart,addItem,addListItem,popListItem} from '../Store/action';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';

export default function Products(){
    const [keyword, setKeyword] = useState("None")
    const [products, setProductDetails] = useState([])
    // setProductDetails(res.data))
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
        .then((res) => setProductDetails(res.data))
        .catch((err) => console.log(err))
    },[])

    const grouped = products.reduce((acc, item, index) => {
        const groupIndex = Math.floor(index / 3);
        if (!acc[groupIndex]) {
          acc[groupIndex] = [];
        }
        acc[groupIndex].push(item);
        return acc;
      }, []);

     
    const items=useSelector((state)=>state.items)
    const list=useSelector((state)=>state.list)
    console.log(list)
    const dispatcher=useDispatch()

    const addToCart=(prod)=>{
        prod.quant=prod.quant+1
        dispatcher(addItem(prod))
        console.log(items)
    }
    
    const handleChange = (e) => {
        setKeyword(e.target.value)
    }

    const rmvWL=(prod,ind)=>{
        dispatcher(popListItem(ind))
        console.log(list)
    }

    const addWL=(prod)=>{
        dispatcher(addListItem(prod))
        console.log(prod)
    }
    return (
        <>

        <div>
        <select class="form-select" aria-label="Default select example" 
            onChange={(e) => handleChange(e)} value={keyword}>
                <option selected value="None">None</option>
                <option value="electronics">electronics</option>
                <option value="jewelery">jewelery</option>
                <option value="men's clothing">men's clothing</option>
                <option value="women's clothing">women's clothing</option>
                
            </select>
           

            {
                grouped.map((group, index) => (
                <div key={index} className="d-flex justify-content-around flex-wrap" style={{ display: 'flex' }}>
               {group.map((product, productIndex) => {
                    product.quant = 0; 
                    if (keyword==="None"){
                    return (
                        <ProductCard src={product.image} name={product.title} description={product.description} id={product.id} price={product.price} rate={product.rating && product.rating.rate} add={() => addToCart(product)} addWL={()=>addWL(product)} rmvWL={()=>rmvWL(product,productIndex)} />
                    );}
                    else if(keyword=="electronics"){
                        if(product.category=="electronics"){
                            return (
                                <ProductCard src={product.image} name={product.title} description={product.description} id={product.id} price={product.price} rate={product.rating && product.rating.rate} add={() => addToCart(product)} addWL={()=>addWL(product)} rmvWL={()=>rmvWL(product,productIndex)} />
                            );
                        }
                    }
                    else if(keyword=="jewelery"){
                        if(product.category=="jewelery"){
                            return (
                                <ProductCard src={product.image} name={product.title} description={product.description} id={product.id} price={product.price} rate={product.rating && product.rating.rate} add={() => addToCart(product)} addWL={()=>addWL(product)} rmvWL={()=>rmvWL(product,productIndex)} />
                            );
                        }
                    }

                    else if(keyword=="men's clothing"){
                        if(product.category=="men's clothing"){
                            return (
                                <ProductCard src={product.image} name={product.title} description={product.description} id={product.id} price={product.price} rate={product.rating && product.rating.rate} add={() => addToCart(product)} addWL={()=>addWL(product)} rmvWL={()=>rmvWL(product,productIndex)} />
                            );
                        }
                    }else if(keyword=="women's clothing"){
                        if(product.category=="women's clothing"){
                            return (
                                <ProductCard src={product.image} name={product.title} description={product.description} id={product.id} price={product.price} rate={product.rating && product.rating.rate} add={() => addToCart(product)} addWL={()=>addWL(product)} rmvWL={()=>rmvWL(product,productIndex)}  />
                            );
                        }
                    }
                    
                    
                        }) }
                </div>
            ))}
        </div>
        
        
        </>
    )
}