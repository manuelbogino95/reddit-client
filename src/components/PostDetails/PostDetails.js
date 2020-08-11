import React from "react";
import styles from "./PostDetails.module.scss";

const PostDetails = ({ selectedPost }) => {
  const isEmpty = Object.keys(selectedPost).length === 0;

  return (
    !isEmpty && (
      <div className={styles.detailsContainer}>
        <h2>{selectedPost.data.author}</h2>
        {selectedPost.data.thumbnail.startsWith("http") && (
          <React.Fragment>
            <img src={selectedPost.data.thumbnail} alt="thumbnail" />
            <a
              href={selectedPost.data.thumbnail}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Save Picture
            </a>
          </React.Fragment>
        )}
        <p>{selectedPost.data.title}</p>
      </div>
    )
  );
};

export default PostDetails;
