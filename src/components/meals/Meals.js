import {Fragment} from "react";
import MealsSummary from "./MealsSummary";
import DummyMeals from "../services/DummyMeals";

const Meals = () => {
    return(
    <Fragment>
        <MealsSummary />

        <DummyMeals />
    </Fragment>
    )
}

export default Meals;