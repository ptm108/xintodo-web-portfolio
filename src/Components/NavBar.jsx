import React, { Fragment } from "react";
import Demo from "./Demo";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TweenOne from "rc-tween-one";
import PathPlugin from "rc-tween-one/lib/plugin/PathPlugin";
TweenOne.plugins.push(PathPlugin);

const useStyles = makeStyles((theme) => ({
  navtypography: {
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontWeight: "200",
    fontSize: "3rem",
    textAlign: "center",
    marginTop: "10px",
  },
  codeboxshape: {
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    margin: "auto",
    width: "50px",
    height: "50px",
    borderRadius: "4px",
    background: "#1890ff",
  },
}));

const NavBar = () => {
  const path = "m 2 2 c 0 -1 2 -2 4 -2 c 3 0 5 0 7 2";
  const animation = {
    path: path,
    duration: 5000,
    ease: "linear",
  };

  const classes = useStyles();
  return (
    <Fragment>
      <Typography className={classes.navtypography}>Xintodo</Typography>
      <TweenOne
        animation={animation}
        style={{
          margin: 0,
          width: 100,
          height: 100,
          transform: "translate(-10px, -10px)",
        }}
        className={classes.codeboxshape}
        component="Heehee"
      />
    </Fragment>
  );
};

export default NavBar;
