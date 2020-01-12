import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import Logo from "../../images/Logo.png";
import { useStyle } from "./style";

export default function TemporaryDrawer() {
  let icons = [
    <HomeIcon />,
    <InfoIcon />,
    <LibraryBooksIcon />,
    <AccountCircleIcon />,
    <PermContactCalendarIcon />
  ];

  let links = ["home", "about me", "resume", "portfolio", "contact"];

  const classes = useStyle();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {["Home", "About Me", "Resume", "Portfolio", "Contact"].map(
          (text, index) => (
            <Link to={`${links[index]}`} className={classes.link}>
              {" "}
              <ListItem button key={text}>
                <ListItemIcon>{icons[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>{" "}
            </Link>
          )
        )}
      </List>
    </div>
  );

  return (
    <div className={classes.navbarDiv}>
      <div className={classes.navLeftSide}>
        <div>
          {" "}
          <img className={classes.navImg} src={Logo} />
        </div>
        <div>
          <h3 className={classes.navHeading}>Mohammad QB</h3>
        </div>
      </div>
      <Button
        onClick={toggleDrawer("left", true)}
        className={classes.menuButton}
      >
        <span style={{ fontWeight: "bold", fontSize: "18px" }}>Menu</span>
        <FormatAlignRightIcon style={{ marginLeft: "5px" }} />
      </Button>
      <Drawer
        className={classes.list}
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", false)}
      >
        {sideList("left")}
      </Drawer>
    </div>
  );
}
