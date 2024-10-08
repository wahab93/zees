// For Add To cart
export const addCart = (product) => {
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


// delete complete product when click on delete
export const delProductCart = (product) => {
    return {
        type: "DELETE_PRODUCT_FROM_CART",
        payload: product // Pass the entire product object to the reducer
    };
};



// For Add To cart
export const addFav = (product) => {
    return {
        type: "ADDFAV",
        payload: product
    }
}


// For del To cart
export const delFav = (product) => {
    return {
        type: "DELFAV",
        payload: product
    }
}

// Action creator for removing a product from favorites
export const removeFav = (product) => {
    return {
        type: "REMOVE_FAV",
        payload: product,
    };
};

export const CLEAR_FAV = (product) => {
    return {
        type: "CLEAR_FAV",
    }
}


export const CLEAR_CART = (product) => {
    return {
        type: "CLEAR_CART",
    }
}