import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./PostList.module.scss";
import Post from "../../components/Post";
import Loader from "../../components/Loader";
import {
  getPosts,
  dismissPost,
  dismissAllPosts,
} from "../../redux/actions/postsActions";

const PostList = () => {
  const { children, before, after } = useSelector((state) => state.posts.posts);
  const { isFetching } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const onPreviousHandler = () => {
    dispatch(getPosts({ before }));
  };

  const onNextHandler = () => {
    dispatch(getPosts({ after }));
  };

  const dismissPostHandler = (id) => {
    dispatch(dismissPost(id));
  };

  const dismissAllPostsHandler = () => {
    dispatch(dismissAllPosts());
  };

  return (
    <div>
      <h2>Reddit Posts</h2>
      <button
        type="button"
        className={styles.dismissAllButton}
        onClick={dismissAllPostsHandler}
      >
        Dismiss All
      </button>
      <div className={styles.navigationContainer}>
        <button type="button" disabled={!before} onClick={onPreviousHandler}>
          Prev
        </button>
        <button type="button" disabled={!after} onClick={onNextHandler}>
          Next
        </button>
      </div>
      <div className={styles.list}>
        {isFetching ? (
          <Loader />
        ) : (
          children &&
          children.map((post) => (
            <Post
              key={post.data.id}
              post={post}
              dismissPostHandler={dismissPostHandler}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PostList;
