import React, {Fragment} from "react";
import Header from "../components/Header";
import Meals from "../components/Meals";

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