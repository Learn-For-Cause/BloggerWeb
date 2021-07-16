import { Row, Col, Container, Form } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn, useSession } from "next-auth/client";
import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const Login = () => {
  const [isLogin, setAuthState] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handleAuthState = () => {
    isLogin ? setAuthState(false) : setAuthState(true);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    axios.post(`${process.env.API_URL}/authUser`, data).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <Container className="vh-100 " fluid>
        <Row className="justify-content-center align-items-center h-100 w-100">
          <Col sm={5} className="root-box">
            <div className="main-box">
              <div className="left">
                {isLogin ? <h3>L O G I N</h3> : <h3>S I G N U P</h3>}
                {isLogin ? (
                  <p onClick={handleAuthState}>Create an Account?</p>
                ) : (
                  <p onClick={handleAuthState}>Already have an Account?</p>
                )}
              </div>
              <div className="right">
                <div className="my-form">
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    {!isLogin && (
                      <>
                        <Form.Control
                          isInvalid={!!errors.name}
                          {...register("name", { required: true })}
                          className="mt-4"
                          placeholder="Full Name"
                        />
                        <Form.Control.Feedback type="invalid">
                          Account Name is required.
                        </Form.Control.Feedback>
                      </>
                    )}
                    <Form.Control
                      isInvalid={!!errors.email}
                      {...register("email", { required: true })}
                      className="mt-4"
                      type="email"
                      placeholder="Email"
                    />
                    <Form.Control.Feedback type="invalid">
                      Account Name is required.
                    </Form.Control.Feedback>
                    <Form.Control
                      isInvalid={!!errors.password}
                      {...register("password", { required: true })}
                      className="mt-4"
                      type="password"
                      placeholder="Password"
                    />
                    <Form.Control.Feedback type="invalid">
                      Account Name is required.
                    </Form.Control.Feedback>
                    <div className="w-100 mt-4 d-flex flex-column justify-content-center align-items-center">
                      <Button
                        variant="contained"
                        color="primary"
                        className="login mt-3 w-75"
                        type="submit"
                      >
                        {isLogin ? "Login" : "Sign Up"}
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        className="google mt-3 w-75"
                        onClick={() => signIn()}
                      >
                        <img src="./google.png" alt="" />
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
