import React, { useContext } from "react";

import classes from "./HeaderCartButton.module.css";
import CardIcon from "../Cart/CartIcon";
import CardContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CardContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CardIcon></CardIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
