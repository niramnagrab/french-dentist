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
            body[]{
              ...,
              _type == "image" => {
                ...,
                asset->
              }
            },
            slug,
            author->,
            categories[]->,
            publishedAt,
            mainImage{asset->}
        }`
      )
      .then(async(data) => {
        setBlogs(data)
        await sanityClient.fetch(`*[_type == "reference" && _id == "image-998a9b93bf67377396ac6206978f8d1494b69f0b-1920x1080-png"]{
        asset
        }`).then(response => {
          console.info('RESPONSE', response);
        })

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
        
                return (
                  <Col xs={12} md={6} lg={4} >
                    <BlogCard
                      description={blog.body}
                      title={blog.title && blog.title}
                      imgURL={blog.mainImage.asset.url}
                      slug={blog.slug}
                      categories={blog.categories}
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
