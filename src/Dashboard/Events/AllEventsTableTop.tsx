import React from "react";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Typography, useTheme } from "@mui/material";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  styles,
} from "./Styles/EventsStyles";

type AllBlogsTableTopProps = {
  handleClickOpen: () => void;
  totalBlogs?: number | string;
};

const AllEventsTableTop: React.FC<AllBlogsTableTopProps> = ({
  handleClickOpen,
  totalBlogs,
}) => {
  const theme = useTheme();
  return (
    <>
      <Box sx={styles.topSection}>
        <Box sx={styles.topSectionLeft}>
          <Box>
            <Typography component="h2" color="primary" fontWeight="700">
              Total Events :
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
            color: "white",
          }}
          color="secondary"
          endIcon={<AddIcon />}
          variant="contained"
          onClick={handleClickOpen}
        >
          Add Event
        </Button>
      </Box>
    </>
  );
};
export default AllEventsTableTop;
