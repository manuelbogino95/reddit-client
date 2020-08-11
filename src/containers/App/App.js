import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import PostList from "../PostList";
import PostDetails from "../../components/PostDetails";
import styles from "./App.module.scss";
import { getPosts } from "../../redux/actions/postsActions";

function App() {
  const { selectedPost } = useSelector((state) => state.posts, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <PostDetails selectedPost={selectedPost} />
      </div>
      <div className={styles.posts}>
        <PostList />
      </div>
    </div>
  );
}

export default App;
