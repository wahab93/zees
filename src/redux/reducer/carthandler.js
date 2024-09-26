const carthandler = (state = [], action) => {
    const product = action.payload
    switch (action.type) {
        case "ADDITEM":
            // check if product is already exist
            const exist = state.find((x) => x.id === product.id)
            if (exist) {
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x)
            } else {
                const product = action.payload
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1
                    }
                ]
            }
            break;
        case "DELITEM":
            const exit1 = state.find((x) => x.id === product.id);
            if (exit1.qty === 1) {
                return state.filter((x) => x.id !== exit1.id);
            }
            else {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                );
            }
        case "DELETE_PRODUCT_FROM_CART":
            // Filter out the product from the cart
            return state.filter((product) => product.id !== action.payload.id);
        case "CLEAR_CART":
            // Clear the cart by returning an empty array
            return [];
        default:
            return state
            break;
    }
}

export default carthandler