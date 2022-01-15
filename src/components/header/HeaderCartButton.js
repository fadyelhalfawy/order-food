import {useContext} from "react";
import CartIcon from "../cart/CartIcon";
import classes from "../modules/HeaderCartButton.module.css";
import cartContext from "../cart/cart-context";

const getAmount = item => item.amount;

const HeaderCartButton = ({ onShow }) => {
    const storedCartContext = useContext(cartContext);
    const itemAmount = storedCartContext.items.map(getAmount);
    const numberOfCartItems = itemAmount.reduce((a, b) => a + b, 0);

    return (

    <button className={classes.button} onClick={onShow}>

      <span className={classes.icon}>
          <CartIcon />
      </span>

      <span>
          Your Cart
      </span>

      <span className={classes.badge}>
          {numberOfCartItems}
      </span>

    </button>
    );
};

export default HeaderCartButton;