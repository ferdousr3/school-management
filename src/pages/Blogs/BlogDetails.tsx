import { Box, Container } from "@mui/material";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import PageDetails from "../../common/PageDetails/PageDetails";
import PageTitle from "../../common/PageTitle/PageTitle";
// import useBlogDetails from "../../Hooks/useBlogDetails";

const BlogDetails = () => {
  const { blogId } = useParams();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = "BlogData.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <PageTitle title={`${blogId}`} />
      <PageDetails title={`${blogId}`} />
      <Box sx={{ py: { sm: "2rem", xs: "2rem" } }}>
        <Container>
          <h1>This is Blog Detail of: {blogId}</h1>
          <Box>
            {/* {postDetails.map((postmessage) => console.log(postmessage))} */}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default BlogDetails;
