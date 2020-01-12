import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles({
  imgDiv: {
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    boxShadow:
      "1px 2px 10px 1px rgba(0,0,0,0.5), 2px 2px 20px 2px rgba(0,0,0,0.4)",
    backgroundImage:
      "url(https://media.giphy.com/media/OK5LK5zLFfdm/giphy.gif)",
    margin: "auto",
    "@media(maxWidth: 350px)": {
      width: "200px",
      height: "200px"
    }
  },
  container: {
    textAlign: "center",
    padding: "10px",
    color: "#fff",
    fontFamily: ["'Modak', cursive"].join(",")
  },
  h1: {
    fontSize: "40px",
    fontFamily: "'Bungee', cursive",
    textShadow: "1px 2px 3px #000, 2px 3px 4px #000, 8px 9px 10px #000"
  },
  Typography: {
    fontFamily: "'Ropa Sans', sans-serif",
    letterSpacing: "3px",
    fontSize: "25px"
  },
  list: {
    display: "inline-block"
  },
  item: {
    fontSize: "20px",
    color: "#fff",
    padding: "10px",
    display: "inline-block"
  },
  ButtonsDiv: {
    display: "flex",
    justifyItems: "center",
    padding: "1px",
    width: "fit-content",
    margin: "auto"
  },
  button: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    color: "white",
    padding: "10px 20px",
    margin: 8,
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    border: 0,
    borderRadius: 3,
    fontWeight: "bold"
  }
});
