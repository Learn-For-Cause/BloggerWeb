import React, { useEffect, useState } from "react";
import BlogList from "../components/BlogList";
import { Button, Container, Grid } from "@material-ui/core";
import styles from "../styles/publication.module.css";
import Blogs from "../components/Blogs";
import Link from "next/link";
import PostBody from "./posts/[id]";
import Navigation from "../components/Navigation";
import axios from "axios";
export default function Home() {
  const [value, setValues] = useState({
    name: "",
    title: "",
    description: "",
    paragraph: "",
    url: "",
  });
  const [posts, setPosts] = useState([]);
  const topics = ["Art", "Book", "Fiction", "Gaming", "Comics", "Film"];
  const changeValue = (e) => {
    setValues({ ...value, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    setPosts([
      ...posts,
      {
        id: 6,
        data: {
          name: value.name,
          title: value.title,
          description: value.description,
          paragraph: value.paragraph,
          image: value.url,
        },
      },
    ]);
    setValues({
      ...value,
      name: "",
      title: "",
      description: "",
      paragraph: "",
      url: "",
    });
  };
  
  const FetchData = () => {
    axios
      .get(`http://localhost:3000/api/bloglist/bloglist`)
      .then((res) => {
        //alert(JSON.stringify(res.data.data[1].blogsadd.blogName));

        var img = "/images/bridge.jpg";
        for(var i=0;i<=4;i++)
        {
          setPosts(posts => [
            ...posts,
           {
            id:res.data.data[i]._id,
             //id: res.data.data[i]._id,
             data: {
               name: res.data.data[i].blogsadd.blogWriter,
               title: res.data.data[i].blogsadd.blogName,
               description: res.data.data[i].blogsadd.blogDesc,
               paragraph: res.data.data[i].blogsadd.blogDesc,
               image: img, //change in later
               dateBlog:res.data.data[i].blogsadd.blogDate,
               timeBlog:res.data.data[i].blogsadd.blogTime,
               publication:res.data.data[i].blogsadd.publication,
             },
           },
         ])
   
        }

      });
  };
 
  useEffect(() => {
    FetchData();
  }, []);

  return (
    <>
      <Navigation />
      <div className={styles.publication_app}>
        <div className={styles.App_posts}>
          <Container>
            {posts.map(({ id, data }) => (
              <Blogs key={id} id={id} data={data} />
            ))}
          </Container>
        </div>
        <div className={styles.topics_container}>
          <h3>SELECT TOPIC OF YOUR INTEREST</h3>
          <div className={styles.topics_list}>
            {topics.map((name, i) => (
              <Link key={i} href="#">
                <a style={{ textDecoration: "none", color: "grey" }}>
                  <div className={styles.topic_name}>
                    <span>{name}</span>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}