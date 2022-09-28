import { Box, Grid, Typography, useTheme } from "@mui/material";
import data from "../../data/data";
import EventBg from "../../assets/event/eventbg.png";
import EvntRightBg from "../../assets/event/eventBook.jpg";
import { EventBox, EventBoxRight, styles } from "./Styles/NewEventStyles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";
import CustomLink from "../../common/CustomLink/CustomLink";

const NewEventSection = () => {
  const theme = useTheme();
  return (
    <>
      <Box>
        <Grid container>
          {/* left side */}
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sx={{ backgroundImage: `url(${EventBg})`, py: "4rem" }}
          >
            <Box sx={{ pl: "15%" }}>
              <Typography component="h1" sx={styles.eventTitle}>
                New Events
              </Typography>
              <Box>
                {data.events.map((event) => (
                  <Grid
                    key={event.id}
                    container
                    spacing={4}
                    sx={{ mb: "1rem" }}
                    alignItems="center"
                  >
                    <Grid item xs={12} sm={3}>
                      <EventBox>
                        <Typography sx={styles.eventDay}>
                          {event.day}
                        </Typography>
                        <Typography sx={styles.eventMonth}>
                          {event.month}
                        </Typography>
                      </EventBox>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <Box>
                        <Typography sx={styles.eventTime}>
                          <AccessTimeIcon sx={styles.eventIcon} />
                          {event.time} By {event.organizer}
                        </Typography>
                        <Typography sx={styles.eventName}>
                          {event.name}
                        </Typography>
                        <Typography sx={styles.eventPlace}>
                          <PlaceIcon sx={styles.eventIcon} /> {event.place}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                ))}
              </Box>
            </Box>
          </Grid>
          {/* right side */}
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sx={{
              backgroundImage: `url(${EvntRightBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              py: "4rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            {data.events.slice(0, 1).map((event) => (
              <Grid
                key={event.id}
                container
                sx={{
                  bgcolor: theme.palette.secondary.main,
                  maxWidth: "32rem",
                  width: "32rem",
                  m: "0px auto",
                  padding: "1.4rem 1.5rem",
                  borderRadius: ".25rem",
                }}
                alignItems="center"
              >
                <Grid item xs={12} sm={3}>
                  <EventBoxRight>
                    <Typography sx={styles.eventDayRight}>
                      {event.day}
                    </Typography>
                    <Typography sx={styles.eventMonthRight}>
                      {event.month}
                    </Typography>
                  </EventBoxRight>
                </Grid>
                <Grid item xs={12} sm={7} sx={{ pl: { sm: 4 } }}>
                  <Box>
                    <Typography sx={styles.eventTimeRight}>
                      <AccessTimeIcon sx={styles.eventIcon} />
                      {event.time} By {event.organizer}
                    </Typography>
                    <Typography sx={styles.eventName}>{event.name}</Typography>
                    <Typography sx={styles.eventPlaceRight}>
                      <PlaceIcon sx={styles.eventIcon} /> {event.place}
                    </Typography>
                    <CustomLink url='/login' text='Join Event' />
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default NewEventSection;
