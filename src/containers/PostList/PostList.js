import React from "react";
import { useSelector } from "react-redux";
import styles from "./PostList.module.scss";
import Post from "../../components/Post";

const PostList = () => {
  const { children } = useSelector((state) => state.posts.posts);

  return (
    <div>
      <h2>Reddit Posts</h2>
      <div className={styles.navigationContainer}>
        <button type="button">Before</button>
        <button type="button">After</button>
      </div>
      <div className={styles.list}>
        {children && children.map((post) => <Post post={post} />)}
      </div>
    </div>
  );
};

export default PostList;
