export const getPostsApi = () => {
  return fetch(process.env.REACT_APP_REDDIT_API, {
    method: "GET",
  })
    .then((data) => data.json())
    .catch((error) => Promise.reject(error));
};
