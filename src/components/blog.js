import React, { useEffect, useState } from "react";
import "../styles/style.css";
import { useTranslation } from "react-i18next";
import sanityClient from "../client.js";
import BlogCard from "./util-components/BlogCard";
import { Col, Container, Row } from "react-bootstrap";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "products"]{
            title,
            description,
            slug,
            image
        }`
      )
      //   .then((data) => setAllPosts(data))
      .then((data) => setBlogs(data))
      .catch((error) => {
        alert("Something went wrong...");
        console.log(error);
      });
  }, []);
  const { t } = useTranslation();
  return (
    <div className="blogpage">
      <div className="bloghero">
        <div className="blogherotext">
          <h1 className="h2-bold">
            The best international dental clinic in Shanghai since 2007
          </h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. It is a
            long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout.
          </p>
        </div>
        <div className="blogheroimage">
          <img src="./homepics/blog.jpeg" alt="blog-photo-dentist" />
        </div>
      </div>

      <div className="blogs">
        <h2 className="h2-bold">More From Our blog</h2>
        <div className="blogtiles">
          <Container>
            <Row>
              {blogs.map((blog) => {
                const { description, title, image, slug } = blog;
                return (
                  <Col xs={12} md={4}>
                    <BlogCard
                      description={description}
                      title={title}
                      imgURL={image}
                      slug={slug}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Blog;
