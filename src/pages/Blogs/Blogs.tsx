import React from 'react';
import PageDetails from "../../common/PageDetails/PageDetails";
import PageTitle from "../../common/PageTitle/PageTitle";

const Blogs = () => {
    return (
        <>
        {/* page title for SEO */}
        <PageTitle title="Blog" />
        <PageDetails title="Blog" />
        <section>
          {/* <AboutInstitution /> */}
        </section>
        <section>
          {/* <OurVision /> */}
        </section>
      </>
    );
};

export default Blogs;