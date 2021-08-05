import React from "react";
import StarIcon from "@material-ui/icons/Star";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Link from 'next/link';
import styles from "../styles/publication.module.css";

const Blogs = ({ id, data }) => {
  return (
    <Link href="/posts/[id]" as={"/posts/"+id} >
      <div className={styles.Posts}>
        <div className={styles.Posts_Text}>
          <Link href="#"><h6 style={{color:"blue"}}>{data.name}</h6></Link>
          <h2>{data.title}</h2>
          <p>{data.description}</p>

          <div className={styles.Posts_TimeStamps}>
            <div className={styles.Posts_TimeStamp_Paragraph}>
              <span>
                6.30 PM
              </span>
              &nbsp;-&nbsp;
              <span style={{ display: "flex", alignItems: "center" }}>
                
                6 minutes
                <StarIcon />
              </span>
              <span className={styles.topic_name} style={{border:"none"}}>
                Art
              </span>
            </div>
            <BookmarkBorderIcon className={styles.Posts_Bookmark} />
          </div>
        </div>

        {data.image && (
          <div
            className={styles.Posts_image}
            style={{ backgroundImage: `url(${data.image})` }}
          />
        )}
      </div>
    </Link>
  );
};

export default Blogs;
