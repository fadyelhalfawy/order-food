import {useContext, useEffect, useState} from "react";
import CartIcon from "../cart/CartIcon";
import cartContext from "../cart/cart-context";
import classes from "../modules/HeaderCartButton.module.css";

const getAmount = item => item.amount;

const HeaderCartButton = ({ onShow }) => {
    const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
    const { items } = useContext(cartContext);

    const itemAmount = items.map(getAmount);
    const numberOfCartItems = itemAmount.reduce((a, b) => a + b, 0);

    const btnClasses = `${classes.badge} ${ btnIsHighLighted ? classes.bump : ""}`;

    useEffect(() => {
        if (items.length === 0) return;

        setBtnIsHighLighted(true);

        const timer = setTimeout( () => {
            setBtnIsHighLighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);


    return (

    <button className={classes.button} onClick={onShow}>

      <span className={classes.icon}>
          <CartIcon />
      </span>

      <span>
          Your Cart
      </span>

      <span className={btnClasses}>
          {numberOfCartItems}
      </span>

    </button>
    );
};

export default HeaderCartButton;