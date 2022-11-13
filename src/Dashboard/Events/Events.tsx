import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";
import DashboardSectionTitle from "../../common/DashboardPageTitle/DashboardPageTitle";
import PageTitle from "../../common/PageTitle/PageTitle";
import AllEventsTableTop from "./AllEventsTableTop";
import AddNewEventModal from "./Modal/AddNewEventModal";
import { styles } from "./Styles/EventsStyles";

// type EventsProps = {};

const Events: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  /**
   * open modal for add new event
   */
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {/* page title */}
      <PageTitle title="Events" />

      {/* Section title */}
      <Box sx={{ mb: 4 }}>
        <DashboardSectionTitle
          sectionTitle="Events"
          description="List of Events for Future Reference"
          position="left"
        />
      </Box>
      {/* main section */}
      <Paper sx={styles.mainSection}>
        {/* Events  table headers */}
        <AllEventsTableTop totalBlogs="10" handleClickOpen={handleClickOpen} />
      </Paper>
      {/* add a new blog */}
      <AddNewEventModal open={open} handleClose={handleClose} />
    </>
  );
};
export default Events;
