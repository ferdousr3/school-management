import * as React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import {
  Box,
  Container,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import Header from "../common/Header/Header";
import auth from "../config/firebase.config";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { useNavigate } from "react-router-dom";
import { styles } from "./Styles/VerifyUserStyle";
import { HiShieldCheck, HiShieldExclamation } from "react-icons/hi";
import { toast } from "react-toastify";

// type VerifyUserProps = {};

const VerifyUser: React.FC = () => {
  const [user] = useAuthState(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const navigate = useNavigate();
  /**
   * * verify user method
   */
  const sendEmail = async () => {
    await sendEmailVerification();
    toast.success("Send Email Verify Link");
  };

  return (
    <>
      <Header />
      <Container>
        <Box sx={styles.main}>
          <Card sx={styles.mainCard}>
            {user?.providerData[0]?.providerId === "password" &&
            !user?.emailVerified ? (
              <>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={styles.notVerifiedTitle}
                  >
                    Email Not Verified <HiShieldExclamation />
                  </Typography>
                  <Box sx={styles.subTitleMain}>
                    <Typography component="p" sx={{ pt: 1 }}>
                      Your Email
                      <Box component="span" sx={styles.subTitleText}>
                        {user?.email}
                      </Box>
                      is not verified. Please check your inbox or spam folder.
                      If You not get link , click <b>send email</b> button for
                      send email Link again.
                    </Typography>
                  </Box>
                </CardContent>
              </>
            ) : (
              <>
                <Typography
                  variant="h5"
                  component="div"
                  sx={styles.notVerifiedTitle}
                >
                  Email is Verified <HiShieldCheck />
                </Typography>
              </>
            )}
            {/* /** * * go home button */}
            <CardActions>
              <Button
                onClick={() => navigate("/")}
                sx={{ px: "1rem" }}
                size="small"
                variant="contained"
              >
                Go Home
              </Button>
              {/* /** * * conditionally email verify link send button */}
              {user?.providerData[0]?.providerId === "password" &&
              !user?.emailVerified ? (
                <>
                  <Button
                    sx={{ px: "1rem" }}
                    size="small"
                    color="secondary"
                    variant="contained"
                    endIcon={<MailOutlineRoundedIcon />}
                    onClick={sendEmail}
                  >
                    Send Email
                  </Button>
                </>
              ) : (
                ""
              )}
            </CardActions>
          </Card>
        </Box>
      </Container>
    </>
  );
};
export default VerifyUser;
