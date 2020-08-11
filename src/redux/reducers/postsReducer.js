import {
  GET_POSTS_PENDING,
  GET_POSTS_FULFILLED,
  GET_POSTS_REJECTED,
  DISMISS_POST,
  DISMISS_ALL_POSTS,
  SELECT_POST,
} from "../constants/postsConstants";

const initialState = {
  posts: [],
  selectedPost: {},
  isFetching: false,
  error: "",
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
      console.log("state", state.posts);
      const selectedPost =
        state.selectedPost.data && state.selectedPost.data.id === action.payload
          ? {}
          : state.selectedPost;
      return {
        ...state,
        posts: { ...state.posts, children: newPosts },
        selectedPost: selectedPost,
      };
    }
    case DISMISS_ALL_POSTS:
      return {
        ...state,
        posts: [],
        selectedPost: {},
      };
    case SELECT_POST:
      return {
        ...state,
        selectedPost: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
