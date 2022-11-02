import { useEffect, useState } from 'react';

interface ID{
    blogId?: number,
}
const useBlogDetails = (blogId: ID) => {
    const [postDetails, setPostDetails]= useState([]);
    useEffect(()=>{
        const url =`http://localhost:3000/blog/${blogId}`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> setPostDetails(data))
      }, [blogId])
      return [postDetails]
};

export default useBlogDetails;