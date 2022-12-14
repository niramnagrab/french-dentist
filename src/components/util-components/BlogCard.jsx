import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function BlogCard(props) {
  const navigate = useNavigate();
  const { description, title, imgURL, slug } = props;
  const state = props;
  return (
    <Card
      style={{ marginBottom: "2rem", cursor: "pointer" }}
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
      <Card.Body style={{ height: "16rem", overFlow: "hidden" }}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description.substring(0, 250)}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
