import React from "react";
import { useLocation } from "react-router-dom";
import BlogCard from "./util-components/BlogCard";

function BlogDetails() {
  const {
    state: { description, title, imgURL, slug }
  } = useLocation();

  return (
    <BlogCard
      description={description}
      title={title}
      imgURL={imgURL}
      slug={slug}
    />
  );
}

export default BlogDetails;
