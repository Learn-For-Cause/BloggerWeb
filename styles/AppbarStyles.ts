import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useAppBarStyles = makeStyles(() =>
  createStyles({
    appbar: {
      height: "8vh",
      width: "100vw",
      backgroundColor: "white",
      boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0.7%",
      fontFamily:'Montserrat',
      paddingLeft:'50px',
      paddingRight:'50px'
    },
    left: {
      height: "98%",
      width: "30%",
      color: "black",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      fontSize:'1.4rem'
    },
    right: {
      height: "98%",
      width: "40%",
      color: "black",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    icons: {
      height: "28px",
      width: "28px",
      marginRight: "3vw",
      color: "black",
    },
    expand: {
      width: "25vw",
      height: "84%",
      color: "black",
      marginRight: "3vw",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    input:{
      borderRadius:'28px',
      border: "3px solid #ccc",
      outline:"none",
      padding:'14px'
    }
  })
);
