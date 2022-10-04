import * as React from "react";
// import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../config/firebase.config";
import { Box } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import Button from "@mui/material/Button";

export default function RecipeReviewCard() {
  const [user] = useAuthState(auth);
  return (
    <Card sx={{ maxWidth: "100%" }}>
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
        title={`Status: ${"unpaid"}`}
        subheader={`Date:${"24-10-2050"}`}
      />
      <CardContent>
        <Box sx={{ mt: "-20px", p: "0px 10px" }}>
          <Typography variant="body2" color="text.secondary">
            {`${user?.displayName}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${user?.email}`}
          </Typography>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          variant="outlined"
          endIcon={<DownloadIcon />}
          sx={{ border: 0, "&:hover": { border: 0 } }}
        >
          Card
        </Button>
        <Button
          variant="outlined"
          endIcon={<DownloadIcon />}
          sx={{ border: 0, "&:hover": { border: 0 } }}
        >
          Edit Profile
        </Button>
      </CardActions>
    </Card>
  );
}
