import React, {Fragment} from 'react';
import classes from './Card.module.css';

function Card(props) {
  return (
    <Fragment className={classes.Card}>
        {props.children}
    </Fragment>
  )
}

export default Card