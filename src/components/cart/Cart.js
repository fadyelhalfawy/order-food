import classes from "../modules/Cart.module.css";
import Modal from "../UI/Modal";
import {useContext} from "react";
import cartContext from "./cart-context";
import CartItem from "./CartItem";

const Cart = ({ onClose }) => {
    const cartConte = useContext(cartContext);

    const hasItems = cartConte.items.length > 0;
    const totalAmount = `$${cartConte.totalAmount.toFixed(2)}`;

    const cartItemRemove = id => {};
    const cartItemAdd = item => {};

    const cartItems = (
        <ul className={classes['cart-items']}>
            { cartConte.items.map(item => (
                <CartItem key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onAdd={cartItemAdd.bind(null, item)}
                    onRemove={cartItemRemove.bind(null, item.id)}
                />
            )) }
        </ul>
    );

    return(
        <Modal onClose={onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>

            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={onClose}>Close</button>
                { hasItems && <button className={classes.button}>Order</button> }
            </div>
        </Modal>
    );
};

export default Cart;