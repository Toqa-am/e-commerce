export const changeCart=(payload)=>{
    return{
        type:"CHG_CART",
        payload:payload
    }
}

export const incItem=(payload)=>{
    return{
        type:"inc_ITEM",
        payload:payload
    }
}
export const addItem=(payload)=>{
    return{
        type:"ADD_ITEM",
        payload:payload
    }
}
export const delItem=(payload)=>{
    return{
        type:"DEL_ITEM",
        payload:payload
    }
}

export const popItem=(payload)=>{
    return{
        type:"POP_ITEM",
        payload:payload
    }
}

export const addListItem=(payload)=>{
    return{
        type:"ADD_TO_LIST",
        payload:payload
    }
}
export const popListItem=(payload)=>{
    return{
        type:"POP_FROM_LIST",
        payload:payload
    }
}

export const signn=(payload)=>{
    return{
        type:"SIGN",
        payload:payload
    }
}