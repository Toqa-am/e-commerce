const VALUE={
    cart:0,
    items:[],
    list:[],
    signed:0
}
export default function cartReducer(
    state= VALUE, action){
        switch(action.type){
            case "CHG_CART":
                return{
                    ...state,
                    cart:state.cart+action.payload
                }
            case "ADD_ITEM":
                state.items.push(action.payload)
                    return{
                        ...state,
                        items:state.items,
                        cart:state.cart+1
                        
                    }
            case "INC_ITEM":
                            return{
                                ...state,
                                cart:state.cart+1                                
                            }
            case "DEL_ITEM":
                            return{
                                ...state,
                                
                            }
            case "POP_ITEM":
                                
                                state.items.splice(action.payload, 1)
                                    return{
                                        ...state,
                                        cart:state.cart-1
                                        
                                    }
            case "ADD_TO_LIST":
                                        state.list.push(action.payload)
                                        console.log(action.payload+" from reducer ")
                                            return{
                                                ...state,
                                                list:state.list,
                                                
                                            }
            case "POP_FROM_LIST":
                                
                                                let foundIndex = -1;

                                                for (let i = 0; i < state.list.length; i++) {
                                                const currentProduct = state.list[i];
                                                console.log(currentProduct["id"] )
                                                console.log(action.payload["id"])
                                                if (currentProduct["id"] === action.payload["id"]) {
                                                    
                                                    
                                                    console.log(i+"index frod reducer")
                                                    state.list.splice(i, 1)
                                                    break; 
                                                }
                                                }                                
            
                                            
                                                return{
                                                    ...state,
                                                    
                                                }  
                                                
                                                case "SIGN":
                                                    console.log(action.payload+"reducer")
                                                        return{
                                                            ...state,
                                                            signed:action.payload,
                                                            
                                                        }

                                                       
            default:
                return state
        }
        
    }

    