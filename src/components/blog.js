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
          {t("blog1")}
          </h1>
          <p>
          {t("blog2")}
          </p>
        </div>
        <div className="blogheroimage">
          <img src="./homepics/blog.jpeg" alt="blog-photo-dentist" />
        </div>
      </div>

      <div className="blogs">
        <h2 className="h2-bold"> {t("blog3")}</h2>
        <div className="blogtiles">
          <div className="blogContainer">
            <Row>
              {blogs.map((blog) => {
                const { description, title, image, slug } = blog;
                return (
                  <Col xs={12} md={6} lg={4} >
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
