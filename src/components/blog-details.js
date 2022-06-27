import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/style.css";

function BlogDetails() {
  const {
    state: { description, title, imgURL, slug }
  } = useLocation();

  return (
    <div className="screenContainer">
      <div className="detailContainer">
        <h2>{title}</h2>
        <div className="imageContainer">
          <img src={imgURL} />
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default BlogDetails;
