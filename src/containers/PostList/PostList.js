import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./PostList.module.scss";
import Post from "../../components/Post";
import Loader from "../../components/Loader";
import {
  getPosts,
  dismissPost,
  dismissAllPosts,
  selectPost,
} from "../../redux/actions/postsActions";

const PostList = () => {
  const { children, before, after } = useSelector(
    (state) => state.posts.posts,
    shallowEqual
  );
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

  const selectPostHandler = (post) => {
    dispatch(selectPost(post));
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
          <TransitionGroup>
            {children &&
              children.map((post) => (
                <CSSTransition
                  key={post.data.id}
                  classNames="transition"
                  timeout={500}
                >
                  <Post
                    key={post.data.id}
                    post={post}
                    dismissPostHandler={dismissPostHandler}
                    selectPostHandler={selectPostHandler}
                  />
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
      </div>
    </div>
  );
};

export default PostList;
