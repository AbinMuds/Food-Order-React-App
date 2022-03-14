import React from "react";
import classes from './MealItem.module.css';

const MealItem = (props) => {
    return (
        <ul className={classes.meal}>
            <h3>{props.name}</h3>
            <li className={classes.description}>{props.description}</li>
            <li className={classes.price}>{props.price}</li>
        </ul>
    )
}

export default MealItem;