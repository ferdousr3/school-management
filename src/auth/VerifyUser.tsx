import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Container, useTheme } from "@mui/material";
import Header from "../common/Header/Header";
import auth from "../config/firebase.config";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

// type VerifyUserProps = {};

const VerifyUser: React.FC = () => {
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const theme = useTheme()
  return (
    <>
      <Header />
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "10rem",
          }}
        >
          <Card
            sx={{
              maxWidth: 345,
              boxShadow: "none",
              border: `1px solid ${theme.extraColor.borderColor}`,
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Verify Email
              </Typography>
              <Box>
                <MailOutlineRoundedIcon />
              </Box>
            </CardContent>
            <CardActions>
              <Button sx={{ px: "1rem" }} size="small" variant="contained">
                Go Home
              </Button>
              <Button
                sx={{ px: "1rem" }}
                size="small"
                color="secondary"
                variant="contained"
                endIcon={<MailOutlineRoundedIcon />}
                onClick={async () => {
                  await sendEmailVerification();
                }}
              >
                Send Email
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Container>
    </>
  );
};
export default VerifyUser;
