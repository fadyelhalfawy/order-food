import React, {Fragment} from "react";
import meals from "../images/meals.jpg";
import classes from "../modules/Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ onShow }) => {
    return(
       <Fragment>
           <header className={classes.header}>
               <h1>Welcome To HalfoElObaha Restaurant</h1>
               <HeaderCartButton onShow={onShow}/>
           </header>

           <div className={classes['main-image']}>
               <img src={meals} alt='A table full of food!' />
           </div>
       </Fragment>
    );
}

export default Header;