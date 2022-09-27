import React from "react";
import PageTitle from "../../common/PageTitle/PageTitle";
import Hero from "../../components/Hero/Hero";

const Home: React.FC<{}> = () => {
  return (
    <>
    <PageTitle title="Home" />
      <Hero />
    </>
  );
};

export default Home;
