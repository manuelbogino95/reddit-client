import {
  GET_POSTS_PENDING,
  GET_POSTS_FULFILLED,
  GET_POSTS_REJECTED,
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
    default:
      return state;
  }
};

export default reducer;
