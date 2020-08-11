export const getPostsApi = (page) => {
  const query = page
    ? `${Object.keys(page)[0]}=${Object.values(page)[0]}&count=10`
    : "";

  return fetch(`${process.env.REACT_APP_REDDIT_API}?${query}`, {
    method: "GET",
  })
    .then((data) => data.json())
    .catch((error) => Promise.reject(error));
};
