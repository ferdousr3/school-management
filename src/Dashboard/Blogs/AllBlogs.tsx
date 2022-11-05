import * as React from "react";
import Paper from "@mui/material/Paper";
import { Box, Button, Typography, useTheme } from "@mui/material";
import AddBlogModal from "./AddBlogModal";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import {
  styles,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./Styles/AllBlogStyles";
import Title from "./Title";
import { useQuery } from "@tanstack/react-query";
import { mainLink } from "../../utils/ApiLInk";
import Loadings from "../../common/Loading/Loadings";
import DataTable from "../../common/DataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";

interface Data {
  status?: string;
  data: {
    total?: number;
    page?: string | null;
    blogs: {
      title?: string;
      description?: string;
      author?: string;
      category?: string;
      date?: string;
      image?: string;
      slug?: string;
      source?: string;
    }[];
  };
}

const AllBlogs: React.FC = () => {
  const columns = [
    {
      field: "title",
      headerName: "Title",
      flex: 1,
    },
    { field: "author", headerName: "Author", flex: 1 },
    { field: "category", headerName: "Category", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
    {
      field: "status",
      headerName: "Status",
      cellClassName: "status-column--cell",
      flex: 1,
    },
  ];

  const userTableStyles = {
    height: "500px",
  };
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const url = `${mainLink}/blog`;
  /**
   * data fetching with react query
   */
  const { data, isLoading, isError, error, refetch } = useQuery<Data, Error>(
    ["blogs"],
    () => fetch(url).then((res) => res.json())
  );
  const blog = data?.data?.blogs;
  /**
   * if take some times for fetching data from API
   */
  console.log(data?.data?.blogs);
  if (isLoading) {
    return <Loadings />;
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
      {/* page title */}
      <Box sx={{ mb: 4 }}>
        <Title
          title="Blogs"
          description="List of Blogs for Future Reference"
          position="left"
        />
      </Box>
      {/* main section */}
      <Paper sx={styles.mainSection}>
        <Box sx={styles.topSection}>
          <Box sx={styles.topSectionLeft}>
            <Box>
              <Typography component="h2" color="primary" fontWeight="700">
                Total Blogs :
                <Box
                  sx={{ color: theme.palette.secondary.main, ml: 0.5 }}
                  component="span"
                >
                  {totalBlogs}
                </Box>
              </Typography>
            </Box>

            <Box component="div" sx={{ ml: { sm: "50px", md: 0 } }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
          </Box>

          <Button
            sx={{
              borderRadius: "6px !important",
              py: 1,
            }}
            color="secondary"
            endIcon={<AddIcon />}
            variant="outlined"
            onClick={handleClickOpen}
          >
            Add Blog
          </Button>
        </Box>
        <DataTable
          rows={blog}
          columns={columns}
          loading={!blog?.length}
          sx={userTableStyles}
          getRowId={(row: any) => row._id}
        />
      </Paper>

      <AddBlogModal open={open} handleClose={handleClose} />
    </>
  );
};
export default AllBlogs;
