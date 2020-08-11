import {
  GET_POSTS_PENDING,
  GET_POSTS_FULFILLED,
  GET_POSTS_REJECTED,
  DISMISS_POST,
} from "../constants/postsConstants";

const initialState = {
  posts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case GET_POSTS_FULFILLED:
      return {
        ...state,
        posts: action.payload.data,
        isFetching: false,
      };
    case GET_POSTS_REJECTED:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
    case DISMISS_POST: {
      const newPosts = state.posts.children.filter(
        (post) => post.data.id !== action.payload
      );

      return {
        ...state,
        posts: { ...state.posts, children: newPosts },
      };
    }
    default:
      return state;
  }
};

export default reducer;
