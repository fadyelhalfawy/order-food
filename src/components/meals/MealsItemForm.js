import classes from "../modules/MealItemForm.module.css"
import InputForm from "../forms/InputForm";

const MealsItemForm = ({ id, ...rest }) => {
    return(
        <form className={classes.form}>
            <InputForm
                id={id}
                { ...rest }
            />

            <button>+ Add</button>
        </form>
    );
}

export default MealsItemForm;