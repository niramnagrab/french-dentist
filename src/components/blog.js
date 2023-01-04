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
        `*[_type == "post"]{
            title,
            body,
            slug,
            author->,
            categories[]->,
            publishedAt,
            mainImage{asset->}
        }`
      )
      .then((data) => {
        setBlogs(data)

      })
      .catch((error) => {
        alert("Something went wrong...");
        console.log(error);
      });
  }, []);
  const { t } = useTranslation();
  console.log(blogs)
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
          <div className="blogContainer">
            <Row>
              {blogs.map((blog) => {
        
                return (
                  <Col xs={12} md={6} lg={4} >
                    <BlogCard
                      description={blog.body[0].children[0].text}
                      title={blog.title && blog.title}
                      imgURL={blog.mainImage.asset.url}
                      slug={blog.slug}
                      author={blog.author && blog.author.name}
                      categories={blog.categories}
                      published={blog.publishedAt}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
