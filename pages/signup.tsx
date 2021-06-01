import { useSignUpStyles } from "../styles/SignUpStyles";
import React, { useState } from "react";
import { textFieldOptions } from "../components/constants/TextFieldOptions";
import { TextField, Button } from "@material-ui/core";
import { useRouter } from "next/router";
import Link from "next/link";
import { signIn, useSession } from "next-auth/client";

const SignUp = () => {
  const router = useRouter();
  const classes = useSignUpStyles();
  const [session, loading] = useSession();
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userUsername: "",
    userPassword: "",
  });
  const handleFormChange = (event: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <div className={classes.root}>
      {!session && (
        <div className={classes.box}>
          <div className={classes.left}>
            <p>BLOG</p>
            <Link href="/login">
              <a className={classes.gotoLogin}>Already Have An Account?</a>
            </Link>
          </div>
          <div className={classes.right}>
            <h2>SIGN UP</h2>
            {textFieldOptions.map((data, index) => {
              return (
                <div key={index} className={classes.textfield}>
                  <TextField
                    style={{ width: "100%" }}
                    variant="outlined"
                    name={data["fieldName"]}
                    id={data["fieldID"]}
                    label={data["fieldLabel"]}
                    onChange={handleFormChange}
                  />
                </div>
              );
            })}
            <div className={classes.buttonGroup}>
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
                Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
