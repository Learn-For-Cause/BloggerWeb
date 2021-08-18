import { useForm, SubmitHandler } from "react-hook-form";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
import { CircularProgress } from "@material-ui/core";
type Inputs = {
  title: string;
  desc: string;
  headerImage: string;
  paragraph: string;
  tag: string;
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
    setLoading(true);
    axios
      .post(`http://localhost:3000/api/bloglist/bloglist`, {
        blogName: data.title,
        blogDesc: data.desc,
        blogWriter: "Pip",
        publication: data.tag,
        blogDate: new Date().toJSON().slice(0, 10),
        blogTime: new Date().toLocaleTimeString(navigator.language, {
          hour: "2-digit",
          minute: "2-digit",
        }),
        verificationStatus: "true",
      })
      .finally(() => router.push("/home"));

    setLoading(false);
  };

  if (loading) {
    return (
      <>
        <CircularProgress
          style={{ margin: "200px auto", color: "#9AC4F8" }}
          size={70}
        />
      </>
    );
  } else {
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
                  isInvalid={!!errors.desc}
                  {...register("desc", { required: true })}
                  className="mt-4"
                  placeholder="Description"
                />
                <Form.Control.Feedback type="invalid">
                  Description
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
            <Row className="mt-3">
              <Col>
                <Form.Label>Select Publication Type</Form.Label>
                <Form.Control
                  isInvalid={!!errors.tag}
                  {...register("tag", { required: true })}
                  placeholder="Select tag"
                  as="select"
                >
                  <option value="art">Art</option>
                  <option value="science">Science</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Tag is required.
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
