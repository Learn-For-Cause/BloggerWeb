import { Row, Col, Container, Form } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "next-auth/client";
import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import MyToast from "../components/Toast";
import { useAppDispatch } from "../redux/hooks";
import { customSession,setUser,userMId} from "../redux/AuthSlice";
import { GoogleLogin } from "react-google-login";
import { useRouter } from "next/router";
import Home from "./home";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const Login = () => {
  const dispatch = useAppDispatch();
  const userId = useSelector(userMId);
  const router = useRouter();
  const [isLogin, setAuthState] = useState(true);
  const [isVisible, setVisible] = useState(false);
  const [toastData, setData] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handleAuthState = () => {
    isLogin ? setAuthState(false) : setAuthState(true);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    axios
      .post(
        isLogin
          ?( `http://localhost:5000/login`)
          : (`http://localhost:5000/register`),
        data
      )
      .then((res) => {
        switch (res.data.userResponse) {
          case "Account Exists": {
            setData(res.data.userResponse);
            setVisible(true);
            break;
          }
          case "Proceed":
            if(!isLogin)
            {
              axios.post(`http://localhost:3000/api/profile/profile2`,
              {
                username: res.data.response.userName,
                password: res.data.response._id,  //it is _id for now
                email: res.data.response.userEmail,
                tagline: "Default",
                about: "Default",
                intrests: "Default",
                following: "0"
            }
            ).finally(() => {
              //alert(res.data.response._id)
              dispatch(setUser(res.data.response._id))
              //localStorage.setItem("Auth", JSON.stringify(mySession));
              const mySession = {
                user: {
                  name: res.data.response.userName,
                  email: res.data.response.userEmail,
                },
                accessToken: res.data.signedToken,
                expires: res.data.expiresIn,
              };
              dispatch(customSession(mySession));
              localStorage.setItem("Auth", JSON.stringify(mySession));
              router.push("/home");
              //alert(userId)
            }
            );

            }else{

            }
            
            break;
          case "Server Error": {
            setData(res.data.userResponse);
            setVisible(true);
            break;
          }
          case "Wrong Password": {
            setData(res.data.userResponse);
            setVisible(true);
            break;
          }
          case "Unregistered": {
            setData(res.data.userResponse);
            setVisible(true);
            setAuthState(false);
            break;
          }
          default:
            console.log("Dude You Messed Up Somewhere");
            break;
        }
      });
  };
  const id =
    "452084354911-nm9m0ml9ujqnr471j3uqsv3370401r8q.apps.googleusercontent.com";

  const googleSuccess = async (res: any) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    localStorage.setItem("Auth", JSON.stringify({ result, token }));
    router.push("/home");
  };

  const googleFailure = () => {
    console.log("OOps");
  };

  return (
    <>
      <Container className="vh-100" fluid>
        <Row className="justify-content-center align-items-center h-100 w-100">
          <Col sm={5} className="root-box">
            <div className="main-box">
              <div className="left">
                {isLogin ? (
                  <>
                    <h3>L O G I N</h3>
                    <p onClick={handleAuthState}>Create an Account?</p>
                  </>
                ) : (
                  <>
                    <h3>S I G N U P</h3>
                    <p onClick={handleAuthState}>Already have an Account?</p>
                  </>
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
                          Name is required.
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
                      Email is required.
                    </Form.Control.Feedback>
                    <Form.Control
                      isInvalid={!!errors.password}
                      {...register("password", { required: true })}
                      className="mt-4"
                      type="password"
                      placeholder="Password"
                    />
                    <Form.Control.Feedback type="invalid">
                      Password is required.
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
                      {/* <Button
                          variant="contained"
                          color="primary"
                          className="google mt-3 w-75"
                          onClick={() => signIn()}
                        >
                          <img src="./google.png" alt="" />
                        </Button> */}
                      <GoogleLogin
                        clientId={id}
                        render={(renderProps) => (
                          <Button
                            variant="contained"
                            color="primary"
                            className="google mt-3 w-75"
                            onClick={renderProps.onClick}
                          >
                            <img src="./google.png" alt="" />
                          </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                      />
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <MyToast isVisible={isVisible} data={toastData} />;
    </>
  );
};

export default Login;
