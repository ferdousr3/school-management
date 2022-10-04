import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }: { title: string }) => {
  return (
    <>
      <Helmet>
        <title>{title} - Greek Code </title>
      </Helmet>
    </>
  );
};

export default PageTitle;
