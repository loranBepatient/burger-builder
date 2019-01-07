import React from "react";

import Aux from "../../hoc/Aux";

import classes from "./Layout.module.css";

const Layout = props => {
  const { Content } = classes;
  return (
    <Aux>
      <div>Toolbar, Sidedrawer, Backdrop</div>
      <main className={Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
