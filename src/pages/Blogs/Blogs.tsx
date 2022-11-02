import React from 'react';
import PageDetails from "../../common/PageDetails/PageDetails";
import PageTitle from "../../common/PageTitle/PageTitle";
import Blog from './Blog';

const Blogs = () => {
    return (
        <>
        {/* page title for SEO */}
        <PageTitle title="Our Blog" />
        <PageDetails title="Our Blog" />
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