import { useSignUpStyles } from "../styles/SignUpStyles";
import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { useRouter } from "next/router";
import Link from "next/link";
import { signIn, useSession } from "next-auth/client";
import axios from "axios";

const Login = () => {
  const router = useRouter();
  const classes = useSignUpStyles();
  const [islogin, setLogin] = useState(false);
  const [session, loading] = useSession();
  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
  });
  const handleFormChange = (event: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(formData);
    axios.post('http://localhost:7070/authUser', formData).then((res) => {
      console.log(res);
      if(res.data === "Succesfully loged In")
      {
        router.push('/')
      }
      else{

      }
    });
  };
  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <div className={classes.left}>
          <p>BLOG</p>
          <Link href="/signup">
            <a className={classes.gotoLogin}>Don't have an account?</a>
          </Link>
        </div>
        <div className={classes.right}>
          <h2>LOGIN</h2>
          <TextField
            style={{ width: "100%" }}
            label="Email"
            name="userEmail"
            variant="outlined"
            onChange={handleFormChange}
          />
          <TextField
            style={{ width: "100%" }}
            label="Password"
            name="userPassword"
            type="password"
            variant="outlined"
            onChange={handleFormChange}
          />
          <div>--- OR ---</div>

          <Button
            style={{ backgroundColor: "white", color: "white" }}
            onClick={() => signIn()}
            className={classes.button1}
          >
            <img src="./Google.png" alt="" />
          </Button>
          <Button
            style={{ backgroundColor: "#283593", color: "white" }}
            onClick={handleSubmit}
            className={classes.button2}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
