// import * as React from "react";
import React, {FC} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";

type insCardData = {
  id: number;
  name?: string;
  designation?: string;
  img?: string;
};

const MultiActionAreaCard:FC<insCardData>=(instructor)=> {
// const MultiActionAreaCard = () => {
  // const name = instructor;

  // const [instructors, setInstructors] = useState([]);
  // useEffect(() => {
  //   fetch("InstructorsData.json")
  //     .then((res) => res.json())
  //     .then((data) => setInstructors(data));
  // }, []);

  return (
    <>
      {/* {instructors.map((instructor: insCardData) => ( */}
        <Grid item xs={12} md={3}>
          <Card sx={{}}>
            <CardActionArea>
              <CardMedia>
                <img src={instructor?.img as string} height="300px" alt="images" width="100%" />
              </CardMedia>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {instructor.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {instructor.designation}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button size="small" color="primary" sx={{ minWidth: "0" }}>
                <FacebookRoundedIcon />
              </Button>
              <Button size="small" color="primary" sx={{ minWidth: "0" }}>
                <GoogleIcon />
              </Button>
              <Button size="small" color="primary" sx={{ minWidth: "0" }}>
                <TwitterIcon />
              </Button>
            </CardActions>
          </Card>
        </Grid>
      {/* ))} */}
    </>
  );
};

export default MultiActionAreaCard;
