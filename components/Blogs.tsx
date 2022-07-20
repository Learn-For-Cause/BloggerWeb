import React from "react";
import StarIcon from "@material-ui/icons/Star";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Blogs = ({ id, data }) => {
  const img = "/images/header.jpg";
  const router = useRouter();
  return (
    <div className="posts" onClick={() => router.push(`/posts/${id}`)}>
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
  );
};

export default Blogs;
