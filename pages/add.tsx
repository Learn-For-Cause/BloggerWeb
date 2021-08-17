import { useForm, SubmitHandler } from "react-hook-form";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
import { CircularProgress } from "@material-ui/core";
type Inputs = {
  title: string;
  tag: string;
  headerImage: string;
  paragraph: string;
};

const MyEditor = () => {

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(data);
    setLoading(true);
    axios 
    .post(
      `http://localhost:3000/api/bloglist/bloglist`,
      {
        blogName: "Pip",
        blogDesc: "Pip",
        blogWriter: "Pip",
        publication: "art",
        blogDate: "12-02-2021",
        blogTime: "10.00",
        verificationStatus: "true"
       }
  );

  setLoading(false);
  };

  if(loading)
  {
    return(<>
    <CircularProgress
            style={{ margin: "200px auto", color: "#9AC4F8" }}
            size={70}
          />
    </>);

  }
  else
  {
    return (
      <Container className="editor" fluid>
        <div className="go-back">
          <p
            onClick={() => {
              router.push("/home");
            }}
          >
            Back to Home
          </p>
        </div>
        <div className="header">
          <p>Add a Research Blog</p>
        </div>
        <div className="card">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="justify-content-between">
              <Col sm={7}>
                <Form.Control
                  isInvalid={!!errors.title}
                  {...register("title", { required: true })}
                  className="mt-4"
                  placeholder="Title"
                />
                <Form.Control.Feedback type="invalid">
                  Title is required.
                </Form.Control.Feedback>
              </Col>
              <Col sm={5}>
                <Form.Control
                  isInvalid={!!errors.tag}
                  {...register("tag", { required: true })}
                  className="mt-4"
                  placeholder="Tag or Topic ex: art, philosophy"
                />
                <Form.Control.Feedback type="invalid">
                  Tag is required.
                </Form.Control.Feedback>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  isInvalid={!!errors.headerImage}
                  {...register("headerImage", { required: true })}
                  className="mt-4"
                  placeholder="Header Background Image ex: http://image.url.com"
                />
                <Form.Control.Feedback type="invalid">
                  Header Background Image is required.
                </Form.Control.Feedback>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  isInvalid={!!errors.paragraph}
                  {...register("paragraph", { required: true })}
                  className="mt-4"
                  placeholder="Enter Text"
                  as="textarea"
                  rows={7}
                />
                <Form.Control.Feedback type="invalid">
                  Article is required.
                </Form.Control.Feedback>
              </Col>
            </Row>
            <Row className="mt-3 w-100">
              <Col className="submit-btn">
                <Button type="submit">Submit for Review</Button>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="header">
          <p>or</p> <Form.Control type="file" accept=".doc,.docx,.pdf" />
        </div>
      </Container>
    );
  }

};

export default MyEditor;
