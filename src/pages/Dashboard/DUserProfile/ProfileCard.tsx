import * as React from "react";
// import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../config/firebase.config";
import { Box, Container } from "@mui/material";

export default function RecipeReviewCard() {
  const [user] = useAuthState(auth);
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <Container>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500], width: "6rem", height: "6rem" }}
              aria-label="recipe"
            >
              <img
                src={user?.photoURL as string}
                alt={user?.displayName as string}
              />
            </Avatar>
          }
          title={`Payment: ${'unpaid'}`}
          subheader={`Email:${user?.email}`}
        />
        <CardContent>
          <Box sx={{ mt: "-20px" }}>
            <Typography variant="body2" color="text.secondary">
              {`Name: ${user?.displayName}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Email:${user?.email}`}
            </Typography>
          </Box>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Container>
    </Card>
  );
}
