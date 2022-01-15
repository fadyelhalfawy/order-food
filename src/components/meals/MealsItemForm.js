import {useRef, useState} from "react";
import classes from "../modules/MealItemForm.module.css"
import InputForm from "../forms/InputForm";

const MealsItemForm = ({ id, onAddToCart, ...rest }) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }

        onAddToCart(enteredAmountNumber);
    };

    return(
        <form className={classes.form}>
            <InputForm
                id={id}
                ref={amountInputRef}
                { ...rest }
            />

            <button onClick={submitHandler}>+ Add</button>

            {!amountIsValid && <p>Please enter a valid amount from 1 to 5</p>}
        </form>
    );
}

export default MealsItemForm;