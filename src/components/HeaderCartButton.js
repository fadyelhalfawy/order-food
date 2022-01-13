import CartIcon from "./cart/CartIcon";
import classes from "./modules/HeaderCartButton.module.css";

const HeaderCartButton = () => {
    return (
    <button className={classes.button}>

      <span className={classes.icon}>
          <CartIcon />
      </span>

      <span>
          Your Cart
      </span>

      <span className={classes.badge}>
          3
      </span>

    </button>
    );
}

export default HeaderCartButton;