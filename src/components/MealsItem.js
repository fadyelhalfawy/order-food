import classes from "../components/modules/MealItem.module.css";
import MealsItemForm from "./MealsItemForm";

const MealsItem = ({ id, meal }) => {
    return(
        <li key={id} className={ classes.meal }>
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
                />
            </div>
        </li>
    );
}

export default MealsItem;