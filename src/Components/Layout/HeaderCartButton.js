import React from "react";
import classes from "./HeaderCartButton.module.css";
import CardIcon from "../Cart/CartIcon";

const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CardIcon></CardIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
          3
      </span>
    </button>
  );
};

export default HeaderCartButton;
