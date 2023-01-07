import { Box, Container } from "@material-ui/core";
import { PortableText } from "@portabletext/react";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "../styles/style.css";
import sanityClient from "../client.js";

function BlogDetails() {

  const [description, setdescription] = useState()
  const [title, settitle] = useState()
  const [imgURL, setimgUrl] = useState()

  const { slug: slugData } = useParams()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="post" && slug.current == '${slugData}'][0]{
          title,
          body[]{
            ...,
            _type == "image" => {
              ...,
              asset->
            }
          },
          slug,
          mainImage{asset->}
      }`
      )
      .then(async (data) => {
        setdescription(data.body)
        settitle(data.title)
        setimgUrl(data.mainImage.asset.url)
      })
      .catch((error) => {
        alert("Something went wrong...");
        console.log(error);
      });
  }, []);

  const myPortableTextComponents = {
    types: {
      image: ({ value }) => <Box display={'flex'} justifyContent='flex-start'>
        <Box component={'img'} sx={{ width: { xs: '90%', sm: '400px' }, height: { xs: '300px', sm: '400px' } }} src={value.asset.url} />
      </Box>
    },
  }

  return (
    <>

      <Box maxWidth='1200px' margin={'0 auto'} marginTop='35px' padding='0 1rem'>
        <div className="">
          <h2 style={{ textAlign: 'center', marginTop: '10px', marginBottom: '20px' }}>{title}</h2>
          <Box display={'flex'} justifyContent='center'>
            <Box component={'img'} src={imgURL} sx={{ width: { xs: '90%', sm: '500px' }, height: { xs: '400px', sm: '500px' } }} />
          </Box>
          <Box marginTop={'20px'}>
            <PortableText
              value={description}
              components={myPortableTextComponents}
            />
          </Box>
        </div>
      </Box>
    </>
  );
}

export default BlogDetails;
