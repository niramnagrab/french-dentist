import { PortableText } from "@portabletext/react";
import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/style.css";

function BlogDetails() {
  const {
    state: { description, title, imgURL, slug }
  } = useLocation();

  const myPortableTextComponents = {
    types: {
      image: ({value}) => <img src={value.asset.url} style={{width:'100%',height:'400px'}} />,
    },
  }

  return (
    <div className="screenContainer">
      <div className="detailContainer">
        <h2>{title}</h2>
        <div className="imageContainer">
          <img src={imgURL} className={"blogImg"} style={{ width: '100%' }} />
        </div>
        <PortableText
            value={description}
            components={myPortableTextComponents}
          />
      </div>
    </div>
  );
}

export default BlogDetails;
