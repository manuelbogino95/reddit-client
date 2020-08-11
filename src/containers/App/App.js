import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/actions/postsActions";

function App() {
  const dispatch = useDispatch();
  const { children } = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      {children &&
        children.map((post) => <p key={post.data.id}>{post.data.name}</p>)}
    </div>
  );
}

export default App;
