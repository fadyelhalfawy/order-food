import {useContext} from "react";
import MealsItemForm from "./MealsItemForm";
import cartContext from "../cart/cart-context";
import classes from "../modules/MealItem.module.css";

const MealsItem = ({ meal }) => {
    const cartCont = useContext(cartContext);

    const addToCartHandler = amount => {
        cartCont.addItem({
            id: meal.id,
            name: meal.name,
            amount: amount,
            price: meal.price
        });
    };

    return(
        <li className={ classes.meal }>
            <div>
                <h3>{ meal.name }</h3>
                <div className={ classes.description }>{ meal.description }</div>
                <div className={ classes.price }>{ meal.price }</div>
            </div>

            <div>
                <MealsItemForm
                    id={'amount'}
                    label={"Amount"}
                    type={"number"}
                    min={"1"}
                    max={"5"}
                    step={"1"}
                    defaultValue={"1"}
                    onAddToCart={addToCartHandler}
                />
            </div>
        </li>
    );
}

export default MealsItem;