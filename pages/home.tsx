import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import styles from "../styles/publication.module.css";
import Blogs from "../components/Blogs";
import Link from "next/link";
import Navigation from "../components/Navigation";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const topics = ["Art", "Book", "Fiction", "Gaming", "Comics", "Film"];
  const classes = useStyles();
  const FetchData = async () => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/api/bloglist/bloglist`)
      .then((res) => {
        console.log(res.data.data);
        setPosts(res.data.data);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <>
      <Navigation />
      <div className="home">
        <div className="home__blogs">
          {posts.map((data: any, index: number) => (
            <Blogs key={index} id={data._id} data={data.blogsadd} />
          ))}
        </div>
        {/* <div className="home__publications">
          <h5>Recommended Topics</h5>
          <div className="home__publications__box">
            {topics.map((name, i) => (
              <Link key={i} href="#">
                <a style={{ textDecoration: "none" }}>
                  <div className="home__publications__box__title">{name}</div>
                </a>
              </Link>
            ))}
          </div>
        </div> */}
      </div>
    </>
  );
}
