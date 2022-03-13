import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, actions) => {
    switch (actions.type) {
        case CART_ADD_ITEM:
            const item = actions.payload;
            const existItem = state.cartItems.find(cartItem => cartItem.product === item.product);
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(cartItem => {
                        if (cartItem.product === item.product) {
                            return { ...cartItem, quantity: item.quantity };
                        }
                        return cartItem;
                    }
                    ) 
                }
            }
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                };                
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (cartItem) => cartItem.product !== actions.payload
                )
            };
        default:
            return state;
    }
}