import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PostList from "../PostList";
import styles from "./App.module.scss";
import { getPosts } from "../../redux/actions/postsActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h2>Post Details</h2>
      </div>
      <div className={styles.posts}>
        <PostList />
      </div>
    </div>
  );
}

export default App;
