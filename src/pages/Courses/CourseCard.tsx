// import * as React from 'react';
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
// import CardHeader from '@mui/material/CardHeader';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
// import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import { red } from '@mui/material/colors';
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box } from "@mui/system";
import { Grid} from "@mui/material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // typescript
  interface eventsData {
    blogID?: number;
    title?: string;
    author?: string;
    date?: string;
    description?: string;
    img?: string;
    time?: string;
  }
  // json Data load
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("EventsData.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  });
  // console.log(events)
  return (
  <>
    {events.map((event: eventsData)=>
  <Grid item xs={12} padding={2} md={3}>
    <Card>
      {/* <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      /> */}
      <CardMedia
        component="img"
        height="194"
        image={event.img}
        alt="Paella dish"
      />
      <Box
        sx={{
          p: 2,
          border: "1px dashed grey",
          background: "#E05A36",
          color: "#fff",
          marginTop: "-24px",
          marginLeft: "18px",
          borderRadius: "5px",
          position: "absolute",
          padding: "10px",
        }}
      >
        Free
      </Box>
      <CardContent>
        <Typography
          variant="h5"
          fontWeight={600}
          color="#444"
          marginTop="1.7rem"
        >
          {event.title}
        </Typography>
        <Typography
          variant="subtitle1"
          fontWeight={600}
          py="12px"
          letterSpacing={0.9}
        >
          <Box component="span" sx={{ color: "#E05A36" }}>
            <AccessTimeIcon
              sx={{ fontSize: "15px", paddingTop: "2px", color: "#E05A36" }}
            />{" "}
            {event.time}
          </Box>{" "}
          BY KENY WHITE
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          lineHeight={1.5}
          fontSize="16px"
        >
          {event.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
    )}
  </>
  );
}
