import React from 'react';
import PageDetails from "../../common/PageDetails/PageDetails";
import PageTitle from "../../common/PageTitle/PageTitle";
import Blog from './Blog';

const Blogs = () => {
    return (
        <>
        {/* page title for SEO */}
        <PageTitle title="Blog" />
        <PageDetails title="Blog" />
        <section>
          {/* <AboutInstitution /> */}
          <Blog />
        </section>
        <section>
          {/* <OurVision /> */}
        </section>
      </>
    );
};

export default Blogs;