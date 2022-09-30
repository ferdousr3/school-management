import Grid from "@mui/material/Grid";
import React from "react";
import PageTitle from "../../../common/PageTitle/PageTitle";
import ProfileCard from "./ProfileCard";

const DUserProfile = () => {
  return (
    <>
      <PageTitle title="Profile" />
      <section>
        <Grid container spacing={4} >
          <Grid item xs={12} md={5} >
            <ProfileCard />
          </Grid>
          <Grid item xs={12} md={7} >
            <ProfileCard />
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default DUserProfile;
