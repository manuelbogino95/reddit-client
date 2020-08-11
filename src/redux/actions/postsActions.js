import {
  GET_POSTS_PENDING,
  GET_POSTS_FULFILLED,
  GET_POSTS_REJECTED,
  DISMISS_POST,
} from "../constants/postsConstants";
import { getPostsApi } from "../../api";

const getPostsPending = () => ({
  type: GET_POSTS_PENDING,
});

const getPostsFulfilled = (data) => ({
  type: GET_POSTS_FULFILLED,
  payload: data,
});

const getPostsRejected = (error) => ({
  type: GET_POSTS_REJECTED,
  payload: error,
});

export const dismissPost = (id) => ({
  type: DISMISS_POST,
  payload: id,
});

export const getPosts = (page) => {
  return (dispatch) => {
    dispatch(getPostsPending());

    getPostsApi(page)
      .then((data) => dispatch(getPostsFulfilled(data)))
      .catch((error) => dispatch(getPostsRejected(error)));
  };
};
