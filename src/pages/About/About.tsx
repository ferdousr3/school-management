import React from "react";
import PageDetails from "../../common/PageDetails/PageDetails";
import PageTitle from "../../common/PageTitle/PageTitle";
import AboutInstitution from "./AboutInstitution";
import OurVision from "./OurVision";

const About = () => {
  return (
    <>
      {/* page title for SEO */}
      <PageTitle title="About" />
      <PageDetails title="About" />
      <section>
        <AboutInstitution />
      </section>
      <section>
        <OurVision />
      </section>
    </>
  );
};

export default About;
