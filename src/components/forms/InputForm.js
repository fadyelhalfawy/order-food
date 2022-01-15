import React from "react";
import classes from "../modules/Input.module.css"

const InputForm = React.forwardRef(({id, label, ...rest}, ref) => {
    return(
       <div className={classes.input}>
           <label htmlFor={ id }> { label } </label>
           <input ref={ref} { ...rest } />
       </div>
    );
});

export default InputForm;