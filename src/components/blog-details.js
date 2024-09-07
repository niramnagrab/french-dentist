import { Box, Container } from "@material-ui/core";
import { PortableText } from "@portabletext/react";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "../styles/style.css";
import { blogData } from "./blog-data";

function BlogDetails() {

  const [description, setdescription] = useState()
  const [title, settitle] = useState()
  const [imgURL, setimgUrl] = useState()

  const { slug: slugData } = useParams()

  useEffect(() => {
    const data = Object.keys(blogData).forEach(key => {
      if (key === slugData) {
        const data = blogData[key];
        setdescription(data.body)
        settitle(data.title)
        setimgUrl(data.mainImage.asset.url)
      }
    })
  }, []);

  const myPortableTextComponents = {
    types: {
      image: ({ value }) => <Box display={'flex'} justifyContent='flex-start' class="blog-images2">
        <Box component={'img'} sx={{ width: { xs: '90%', sm: '600px' }, height: { xs: '300px', sm: 'auto' }}} src={value.asset.url} />
      </Box>
    },
  }

  return (
    <>

      <Box maxWidth='1200px' margin={'50px 20%'} marginTop='50px' marginBottom="10px"  padding='0 1rem'>
        <div className="abc" marginTop='50px' marginBottom="100px">
          <h2 style={{ textAlign: 'center', marginTop: '10px', marginBottom: '20px' }}>{title}</h2>
          <Box display={'flex'} justifyContent='center' class="blog-images1">
            <Box component={'img'} src={imgURL} sx={{ width: { xs: '90%', sm: '500px' }, height: { xs: 'auto', sm: 'auto' } }} />
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
