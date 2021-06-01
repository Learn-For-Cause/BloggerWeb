import React from 'react';
import { useLoginStyles } from "../styles/LoginStyles";
import { NextPage } from 'next/types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login : NextPage = () =>{
    const classes = useLoginStyles();
    return(
    <div className={classes.main}>
    <div className={classes.containerMain}>
      <div className={classes.div1}>
      <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                  <h1 className={classes.Heading}>BLOG</h1> </Grid></Grid></Grid></Grid>
      </div>
        <Container className={classes.container}>
      <form>
        <Grid container spacing={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                  <h1 className={classes.Heading}>LOGIN</h1> </Grid></Grid></Grid></Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth 
                label="Email" name="email" size="small" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  size="small"
                  type="password"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" fullWidth type="submit" variant="contained">
              Log in
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
    </div>
    </div>);
}
export default Login;