import React from "react";
import PageDetails from "../../common/PageDetails/PageDetails";
import PageTitle from "../../common/PageTitle/PageTitle";
import Event from "./Event";

const Events = () => {
  return (
    <>
      <PageTitle title="Events" />
      <PageDetails title="Events" />
      <section>
        <Event />
      </section>
    </>
  );
};

export default Events;
