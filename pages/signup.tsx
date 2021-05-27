import { useSignUpStyles } from "../styles/SignUpStyles";
import React, { useState } from "react";
import { textFieldOptions } from "../components/constants/TextFieldOptions";
import { TextField, Button } from "@material-ui/core";
import Link from "next/link";

const SignUp = () => {
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

  const classes = useSignUpStyles();
  return (
    <div className={classes.root}>
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
          <Button onClick={handleSubmit} className={classes.btn}>
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
