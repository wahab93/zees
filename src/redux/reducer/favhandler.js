const favhandler = (state = [], action) => {
    const product = action.payload;

    switch (action.type) {
        case "ADDFAV":
            // Check if product is already in favorites
            const existsInFavorites = state.some((x) => x.id === product.id);

            if (existsInFavorites) {
                return state; // Product already in favorites, do nothing
            } else {
                // Add the product to favorites
                return [...state, product];
            }

        case "DELFAV":
            // Remove the product from favorites
            return state.filter((x) => x.id !== product.id);
        // Assuming you have an action type "REMOVE_FAV" for removing products from favorites
        case "REMOVE_FAV":
            return state.filter((x) => x.id !== product.id);

        case "CLEAR_FAV":
            // Clear the favorites by returning an empty array
            return [];

        default:
            return state;
    }
};

export default favhandler;
