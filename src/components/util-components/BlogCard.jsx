import { Box, Typography } from "@material-ui/core";
import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function BlogCard(props) {
  const navigate = useNavigate();
  const { description, title, imgURL, slug, categories } = props;
  const state = props;

  let firstText = description[0].children[0].text

  return (
    <Card
      className={"blogCard"}
      mx="2"
      onClick={() => navigate(`/blog/${slug.current}`, { state })}
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
        <Card.Title style={{ fontWeight: 'bold' }}>{title && title}</Card.Title>
        {categories && categories.length > 1 && (
          <Card.Subtitle className="mb-2 text-muted " style={{ fontSize: '19px', display: 'flex', gap: '6px' }}
          >Categories:
            {categories && categories.length > 1 && categories.map((item, i) => {
              return <div key={i}
              >
                <span style={{ fontWeight: 'bold', color: 'black' }}>
                  {categories.length > i + 1 ? `${item.title},` : item.title}
                </span>
              </div>
            })}
          </Card.Subtitle>
        )}
        {categories && categories.length === 1 && (
          <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '19px' }}
          >Categories:
            <span style={{ fontWeight: 'bold', color: 'black', marginLeft: '6px' }}>{categories[0].title}</span>
          </Card.Subtitle>
        )}
        <Card.Text>

          {firstText.length > 250 ? (
            <p >
              {firstText.substring(0, 250)}...  <Box component={'span'} fontSize='19px' color='#1976d2'>read more</Box>
            </p>
          ) : firstText}

        </Card.Text>
      </Card.Body>
    </Card >
  );
}

export default BlogCard;
