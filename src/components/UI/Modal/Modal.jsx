import React from "react";

import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";

const Modal = ({ children, show, onModalClose }) => {
  return (
    <React.Fragment>
      <Backdrop show={show} onClicked={onModalClose} />
      <div
        className={classes.Modal}
        style={{
          transform: show ? "translateY(0)" : "translateY(-20vh)",
          opacity: show ? 1 : 0
        }}
      >
        {children}
      </div>
    </React.Fragment>
  );
};

export default Modal;
