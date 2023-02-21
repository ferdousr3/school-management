import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import DashboardSectionTitle from "../../common/DashboardPageTitle/DashboardPageTitle";
import PageTitle from "../../common/PageTitle/PageTitle";
import { mainLink } from "../../utils/ApiLInk";
import { EData } from "../../utils/Types";
import AllEventsTableTop from "./AllEventsTableTop";
import AddNewEventModal from "./Modal/AddNewEventModal";
import { styles } from "./Styles/EventsStyles";

// type EventsProps = {};

const Events: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [allEvents, setAllEvents] = useState([]);
  const url = `${mainLink}/event`;
  /**
   * data fetching with react query
   */
  const { data, isLoading, isError, error } = useQuery<EData, Error>(
    ["blogs"],
    () => fetch(url).then((res) => res.json())
  );
  const totalEvents = data?.data?.total;
  console.log(totalEvents);
  /**
   * open modal for add new event
   */
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  console.log(data);
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
        <AllEventsTableTop
          totalBlogs={"data?.length"}
          handleClickOpen={handleClickOpen}
        />
      </Paper>
      {/* add a new blog */}
      <AddNewEventModal open={open} handleClose={handleClose} />
    </>
  );
};
export default Events;
