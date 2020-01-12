import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles({
  navbarDiv: {
    display: "flex",
    justifyContent: "space-between",
    justifyItems: "center"
  },
  navLeftSide: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px"
  },
  navImg: {
    border: "2px solid #fff",
    borderRadius: "50%",
    width: "35px",
    height: "35px"
  },
  navHeading: {
    color: "#fff",
    marginLeft: "5px",
    fontFamily: "Montserrat, sans-serif"
  },
  menuButton: {
    color: "#fff",
    fontFamily: "'Montserrat', sans-serif",
    padding: "10px"
  },
  list: {
    width: 250
  },
  link: {
    color: "#000",
    textDecoration: "none"
  }
});
