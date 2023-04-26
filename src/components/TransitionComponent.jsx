import { Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { CSSTransition, Transition } from "react-transition-group";
import "./animation.css";

const TransitionComponent = () => {
  const nodeRef = useRef(null);
  const [open, setOpen] = useState(false);

  setTimeout(() => {
    setOpen(!open);
  }, 5000);

  // useEffect(() => {
  //   setOpen(true)
  // }, [])

  const duration = 3000;

  return (
    <div className="MyComponent">
      <CSSTransition in={open} timeout={5000} classNames="slide-in">
        <div className="MyComponent-content">
          <h1>My Component</h1>
          <p>This is a slide-in animation.</p>
        </div>
      </CSSTransition>
    </div>
  );
};

export default TransitionComponent;
