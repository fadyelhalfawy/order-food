import React, {Fragment} from "react";
import Header from "../components/header/Header";
import Meals from "../components/meals/Meals";

const App = () => {
        return(
            <Fragment>
                <Header />

                <main>
                    <Meals />
                </main>

            </Fragment>
        );
}

export default App;