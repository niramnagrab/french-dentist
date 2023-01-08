import { Box, Container } from "@material-ui/core";
import { PortableText } from "@portabletext/react";
import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/style.css";

function BlogDetails() {
  const {
    state: { description, title, imgURL, slug }
  } = useLocation();

  const myPortableTextComponents = {
    types: {
      image: ({ value }) => <Box display={'flex'} justifyContent='flex-start'>
        <Box component={'img'} sx={{ width: { xs: '90%', sm: '400px' }, height: { xs: '300px', sm: '400px' }, objectFit: { xs: "contain", sm: "contain", lg: "contain"} }} src={value.asset.url} />
      </Box>
    },
  }

  return (
    <>

      <Box maxWidth='1200px' margin={'0 auto'} marginTop='50px' marginBottom="100px"  padding='0 1rem'>
        <div className="">
          <h2 style={{ textAlign: 'center', marginTop: '10px', marginBottom: '20px' }}>{title}</h2>
          <Box display={'flex'} justifyContent='center'>
            <Box component={'img'} src={imgURL} sx={{ width: { xs: '90%', sm: '500px' }, height: { xs: '400px', sm: '500px' }, objectFit: { xs: "contain", sm: "contain", lg: "contain"} }} />
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
