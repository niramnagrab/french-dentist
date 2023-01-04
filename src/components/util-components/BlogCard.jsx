import { Box, Typography } from "@material-ui/core";
import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function BlogCard(props) {
  const navigate = useNavigate();
  const { description, title, imgURL, slug, author, categories, published } = props;
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
        <Card.Title style={{ fontWeight: 'bold' }}>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '19px' }} >Written by: <span style={{ fontWeight: 'bold', textTransform: 'capitalize', color: 'black' }}>{author}</span></Card.Subtitle>
        {categories.length > 1 && (
          <Card.Subtitle className="mb-2 text-muted " style={{ fontSize: '19px', display: 'flex', gap: '6px' }}
          >Categories:
            {categories.length > 1 && categories.map((item, i) => {
              return <div key={i}
              >
                <span style={{ fontWeight: 'bold', color: 'black' }}>
                  {categories.length > i + 1 ? `${item.title},` : item.title}
                </span>
              </div>
            })}
          </Card.Subtitle>
        )}
        {categories.length === 1 && (
          <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '19px' }}
          >Categories:
            <span style={{ fontWeight: 'bold', color: 'black', marginLeft: '6px' }}>{categories[0].title}</span>
          </Card.Subtitle>
        )}
        < Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '19px' }} >Published At: <span style={{ fontWeight: 'bold', color: 'black' }}>{new Date(published).toDateString()}</span></Card.Subtitle >
        <Card.Text>

          {description.length > 250 ? (
            <p >
              {description.substring(0, 250)}...  <Box component={'span'} fontSize='19px' color='#1976d2'>read more</Box>
            </p>
          ) : description}

        </Card.Text>
      </Card.Body>
    </Card >
  );
}

export default BlogCard;
