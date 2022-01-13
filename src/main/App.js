import React, {useState, Fragment} from "react";
import Header from "../components/header/Header";
import Meals from "../components/meals/Meals";
import Cart from "../components/cart/Cart";

const App = () => {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => setCartIsShown(true);

    const hideCartHandler = () => setCartIsShown(false);

        return(
            <Fragment>
                {cartIsShown && <Cart onClose={hideCartHandler}/>}

                <Header onShow={showCartHandler}/>

                <main>
                    <Meals />
                </main>

            </Fragment>
        );
}

export default App;