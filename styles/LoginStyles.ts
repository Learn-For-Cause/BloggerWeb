import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useLoginStyles = makeStyles(() =>
  createStyles({
    main:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      height:'90vh',
      background:'#fff'
    },
    containerMain:{
      margin:'20px',
      display:'flex',
      flexDirection:'row',
      boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
      borderRadius:'10px 10px 10px 10px',
      maxWidth:'80vh',
    },
    div1:{
      background:'#283593',
      height:'45vh',
      width:'60%',
      color:'#fff'
    },
    container:{
      width:'100%',
      padding:'20px',
      paddingTop:'70px',
      background:'#ffffff',
      height:'45vh'
    },
    Heading:{
      marginTop:'20px',
      fontWeight:'bold',
      textAlign:'center',
      fontSize:'30px'
    }
  })
);
