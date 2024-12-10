import React, { Fragment } from "react";
import "./Header.module.css";
import classes from "./Header.module.css";
import HeaderCartBtn from "./HeaderCartBtn";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartBtn onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="logo"></img>
      </div>
    </Fragment>
  );
};

export default Header;