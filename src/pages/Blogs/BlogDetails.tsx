import React from "react";
import { useParams } from "react-router-dom";
import useBlogDetails from "../../Hooks/useBlogDetails";



const BlogDetails = () => {
  const { blogId } = useParams();
  console.log(blogId);
  const [postDetails] = useBlogDetails(blogId as any);
  
  return (
    <div>
      <h1>This is Blog Detail of: {postDetails}</h1>

      {
        postDetails
      }
      {/* <Link to={`/checkout/${blogId}`}>
        <button className="btn btn-primary m-5 text-center">Proceed checkout</button>
      </Link> */}
    </div>
  );
};

export default BlogDetails;
