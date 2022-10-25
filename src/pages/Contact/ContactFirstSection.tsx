import React from "react";
import { Grid } from "@mui/material";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";
// type ContactFirstSectionProps = {

// };

const ContactFirstSection: React.FC = () => {
  return (
    <>
      <Grid container>
        <ContactLeft />
        <ContactRight />
      </Grid>
    </>
  );
};
export default ContactFirstSection;
