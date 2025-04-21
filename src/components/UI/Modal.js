"use client"

import { Fragment, useEffect, useState } from "react"
import ReactDOM from "react-dom"
import classes from "./Modal.module.css"

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

const Modal = (props) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Create overlays div if it doesn't exist
    if (!document.getElementById("overlays")) {
      const overlaysDiv = document.createElement("div")
      overlaysDiv.id = "overlays"
      document.body.appendChild(overlaysDiv)
    }

    return () => {
      // Optional cleanup if needed
    }
  }, [])

  if (!mounted) {
    return null
  }

  const portalElement = document.getElementById("overlays")

  if (!portalElement) {
    // Fallback rendering if portal element is not available
    return (
      <Fragment>
        <Backdrop onClose={props.onClose} />
        <ModalOverlay>{props.children}</ModalOverlay>
      </Fragment>
    )
  }

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  )
}

export default Modal




// import React, { Fragment } from "react";
// import ReactDOM from "react-dom";
// import classes from "./Modal.module.css";

// const Backdrop = (props) => {
//   return <div className={classes.backdrop} onClick={props.onClose}></div>;
// };

// const ModalOverlay = (props) => {
//   return (
//     <div className={classes.modal}>
//       <div className={classes.content}>{props.children}</div>
//     </div>
//   );
// };

// const portalElement = document.getElementById("overlays");

// const Modal = (props) => {
//   return (
//     <Fragment>
//       {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
//       {ReactDOM.createPortal(
//         <ModalOverlay>{props.children}</ModalOverlay>,
//         portalElement
//       )}
//     </Fragment>
//   );
// };

// export default Modal;