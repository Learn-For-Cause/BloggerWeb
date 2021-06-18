import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useSignUpStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "100vh",
      width: "100vw",
      backgroundColor: "white",
      fontFamily: "Montserrat",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    box: {
      height: "80vh",
      width: "70vw",
      backgroundColor: "white",
      fontFamily: "Montserrat",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    },
    left: {
      height: "100%",
      width: "40%",
      backgroundColor: "#283593",
      fontFamily: "Montserrat",
      color:"#fff",
      fontSize: "1.4rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "28px 0 28px 0",
    },
    gotoLogin: {
      fontSize: "0.9rem",
      cursor: "pointer",
      "&:hover": {
        color: "#b6c9f0",
      },
    },
    right: {
      height: "100%",
      width: "60%",
      fontFamily: "Montserrat",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      color: "black",
      padding: "21px",
    },
    button1: {
      backgroundColor: "grey",
      color: "black",
      width: "19%",
    },
    button2: {
      width: "79%",
    },
    buttonGroup: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    textfield: {
      width: "94%",
    },
  })
);
