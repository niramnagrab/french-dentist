import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function BlogCard(props) {
  const navigate = useNavigate();
  const { description, title, imgURL, slug } = props;
  const state = props;
  return (
    <Card
      className={"blogCard"}
      mx="2"
      onClick={() => navigate(`/blog-detail/${slug}`, { state })}
    >
      <div
        style={{
          overflow: "hidden",
          maxHeight: "12rem"
        }}
      >
        <Card.Img variant="top" src={imgURL} />
      </div>
      <Card.Body className={"cardBody"}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description.substring(0, 250)}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
