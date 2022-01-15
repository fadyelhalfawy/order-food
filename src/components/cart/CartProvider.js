import {useReducer} from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === "Add") {
        const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);
        const existCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existCartItem = state.items[existCartItemIndex];
        let updatedItems;

        if (existCartItem) {
            const updateItem = {
                ...existCartItem,
                amount: existCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existCartItemIndex] = updateItem;
        }

        else updatedItems = state.items.concat(action.item);

        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount
        };
    }

    if (action.type === "Remove") {
        const existCartItemIndex = state.items.findIndex(item => item.id === action.id);
        const existItem = state.items[existCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existItem.price;
        let updatedItems;
        if (existItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        }
        else {
            const updatedItem = { ...existItem, amount: existItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    return defaultCartState;
};

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = item => {
        dispatchCartAction({type: "Add", item: item});
    };

    const removeItemHandler = id => {
        dispatchCartAction({type: "Remove", id: id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;