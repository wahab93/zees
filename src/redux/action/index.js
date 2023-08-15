// For Add To cart
export const addCart = (product) => {
    debugger
    return {
        type: "ADDITEM",
        payload: product
    }
}


// For del To cart
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}