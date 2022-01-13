import React, {Fragment} from "react";
import Header from "../components/header/Header";
import Meals from "../components/meals/Meals";
import Cart from "../components/cart/Cart";

const App = () => {
        return(
            <Fragment>
                <Cart />
                <Header />

                <main>
                    <Meals />
                </main>

            </Fragment>
        );
}

export default App;