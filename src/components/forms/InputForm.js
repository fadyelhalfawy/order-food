import classes from "../modules/Input.module.css"

const InputForm = ({ id, label, ...rest }) => {
    return(
       <div className={classes.input}>
           <label htmlFor={ id }> { label } </label>
           <input { ...rest } />
       </div>
    );
}

export default InputForm;