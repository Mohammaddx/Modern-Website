import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles({
  container: {
    borderRadius: "10px",
    backgroundColor: "rgb(27, 28, 29)",
    padding: "10px",
    width: "90%",
    margin: "auto",
    boxShadow: "1px 0px 20px 1px #000",
    position: "relative",
    top: "50px"
  },
  h1: {
    color: "rgb(245, 0, 87)",
    textAlign: "center",
    fontWeight: "bold",
    border: "1px solid #fff",
    padding: "10px",
    fontFamily: "'Quicksand', sans-serif"
  },
  itemGrid: {
    borderBottom: "1px solid rgb(245, 0, 87)",
    padding: "7px"
  }
});
