import React, {useState} from "react";
import Header from "../components/header/Header";
import Meals from "../components/meals/Meals";
import Cart from "../components/cart/Cart";
import CartProvider from "../components/cart/CartProvider";

const App = () => {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => setCartIsShown(true);

    const hideCartHandler = () => setCartIsShown(false);

        return(
            <CartProvider>
                {cartIsShown && <Cart onClose={hideCartHandler}/>}

                <Header onShow={showCartHandler}/>

                <main>
                    <Meals />
                </main>

            </CartProvider>
        );
}

export default App;