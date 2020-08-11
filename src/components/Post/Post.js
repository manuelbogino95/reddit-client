import React, { useState } from "react";
import * as moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faTimesCircle,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Post.module.scss";

const Post = ({ post, dismissPostHandler, selectPostHandler }) => {
  const [status, setStatus] = useState(false);

  const postClickHandler = () => {
    setStatus(true);
    selectPostHandler(post);
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <FontAwesomeIcon
          icon={faCircle}
          className={!status ? `${styles.unread}` : `${styles.read}`}
        />
        <span className={styles.author}>{post.data.author}</span>
        <span>{moment(post.data.created_utc, "X").fromNow()}</span>
      </div>
      <div className={styles.content} onClick={postClickHandler}>
        {post.data.thumbnail.startsWith("http") && (
          <img alt="thumbnail" src={post.data.thumbnail} />
        )}
        <p>{post.data.title}</p>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      <div className={styles.footer}>
        <div onClick={() => dismissPostHandler(post.data.id)}>
          <FontAwesomeIcon icon={faTimesCircle} />
          <span>Dismiss Post</span>
        </div>
        <span>{post.data.num_comments} comments</span>
      </div>
    </div>
  );
};

export default Post;
