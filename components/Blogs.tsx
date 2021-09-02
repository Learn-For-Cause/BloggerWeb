import React from "react";
import StarIcon from "@material-ui/icons/Star";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Link from "next/link";
import Image from "next/image";

const Blogs = ({ id, data }) => {
  const img = "/images/header.jpg";
  return (
    <Link href="/posts/[id]" as={"/posts/" + id}>
      <div className="posts">
        <div className="posts__body">
          <h1>{data.blogName}</h1>
          <p>{data.blogDesc}</p>
          <div className="posts__body__details">
            <p>{data.blogWriter}</p>
            <p>{data.blogTime}</p>
            <p>{data.blogDate}</p>
          </div>
        </div>
        <div
          className="posts__img"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
    </Link>
  );
};

export default Blogs;
