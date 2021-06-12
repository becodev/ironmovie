import React from "react";
import { AppBar, Toolbar, Slide } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import logo from "../assets/ironmovies.png";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Logo() {
  return (
    <>
      <a href="/">
        <img src={logo} alt="logo" className="logo" />
      </a>
    </>
  );
}

const Menu = (props) => {
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar color="inherit">
          <Toolbar>
            <Logo />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default Menu;
