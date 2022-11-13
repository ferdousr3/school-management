import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import DashboardSectionTitle from "../../common/DashboardPageTitle/DashboardPageTitle";
import DataTable from "../../common/DataTable/DataTable";
import Loadings from "../../common/Loading/Loadings";
import { mainLink } from "../../utils/ApiLInk";
import AddBlogModal from "./AddBlogModal";
import { styles } from "./Styles/AllBlogStyles";
// import { GridColDef } from "@mui/x-data-grid";
import { columns } from "./BlogColumns/BlogColumns";

import PageTitle from "../../common/PageTitle/PageTitle";
import { BData } from "../../utils/Types";
import AllBlogsTableTop from "./AllBlogsTableTop";

const AllBlogs: React.FC = () => {
  // const [blogs, setBlogs] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const url = `${mainLink}/blog`;
  /**
   * data fetching with react query
   */
  const { data, isLoading, isError, error } = useQuery<BData, Error>(
    ["blogs"],
    () => fetch(url).then((res) => res.json())
  );
  const blog = data?.data?.blogs;
  /**
   * if take some times for fetching data from API
   */

  if (isLoading) {
    return <Loadings />;
  }
  /**
   * if take some times for fetching data from API
   */

  if (isError) {
    return <h1>{error?.message}</h1>;
  }
  /**
   * if any errors fetching data from API
   */
  // if (isError) {
  //   return <div>{error}</div>;
  // }

  const totalBlogs = data?.data?.total;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <PageTitle title="Blogs" />
      {/*Section title */}
      <Box sx={{ mb: 4 }}>
        <DashboardSectionTitle
          sectionTitle="Blogs"
          description="List of Blogs for Future Reference"
          position="left"
        />
      </Box>
      {/* main section */}
      <Paper sx={styles.mainSection}>
        {/* blogs table headers */}
        <AllBlogsTableTop
          totalBlogs={totalBlogs}
          handleClickOpen={handleClickOpen}
        />
        {/* blogs table data */}
        <DataTable
          rows={blog}
          columns={columns}
          loading={!blog?.length}
          getRowId={(row: any) => row._id}
        />
      </Paper>
      {/* add a new blog */}
      <AddBlogModal open={open} handleClose={handleClose} />
    </>
  );
};
export default AllBlogs;
