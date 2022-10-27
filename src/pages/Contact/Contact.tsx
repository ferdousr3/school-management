import React from "react";
import PageDetails from "../../common/PageDetails/PageDetails";
import PageTitle from "../../common/PageTitle/PageTitle";
import ContactFirstSection from "./ContactFirstSection";

const Contact = () => {
  return (
    <>
      <PageTitle title="Contact" />
      <PageDetails title="Contact" />
      {/* contact first section */}
      <section>
        <ContactFirstSection />
      </section>
    </>
  );
};

export default Contact;
