import React, { useEffect } from "react";
import { Box, Button, Stack } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
// import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import {
  // useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../config/firebase.config";
import Loadings from "../../common/Loading/Loadings";
import { locationProps } from "../../utils/Types";

const SocialLogin = () => {
  // const theme = useTheme();
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  // const [signInWithFacebook, fbUser, fbLoading, fbError] =
  //   useSignInWithFacebook(auth);

  // const [token] = useToken(googleUser || fbUser);
  // Google singing
  const handleGoogleSignIn = (): void => {
    signInWithGoogle();
  };
  // Facebook singing
  // const handleFaceBookSignIn = (): void => {
  //   signInWithFacebook();
  // };

  const navigate = useNavigate();

  const location: locationProps = useLocation();

  const from = location.state?.from?.pathname || "/";

  const TColor = "#00acee";
  // const fColor = "#4267B2";

  const loginItems = [
    {
      id: 1,
      title: " Google",
      color: TColor,
      icon: <GoogleIcon />,
      onclick: handleGoogleSignIn,
    },
    // {
    //   id: 2,
    //   title: "Facebook",
    //   icon: <FacebookOutlinedIcon />,
    //   color: fColor,
    //   onclick: handleFaceBookSignIn,
    // },
  ];
  useEffect(() => {
    if (googleUser) {
      navigate(from, { replace: true });
    }
  }, [googleUser, navigate, from, location]);

  if (googleLoading) {
    return <Loadings />;
  }
  return (
    <>
      <Box>
        <Box>
          {/* all errors  */}
          {googleError && (
            <Box component="p" sx={{ color: "red",fontSize:'.875rem' }}>
              {googleError?.message}
            </Box>
          )}
          {/* {fbError && (
            <small className="text-sm font-medium text-red-500 text-center">
              {fbError.message}
            </small>
          )} */}
        </Box>

        <Stack
          direction="row"
          sx={{ my: 2, display: "flex", justifyContent: "center" }}
        >
          {loginItems.map((item) => (
            <Button
              key={item.id}
              onClick={item.onclick}
              variant="outlined"
              sx={{ borderRadius: "5px !important" }}
              startIcon={item.icon}
            >
              {item.title}
            </Button>
          ))}

          {/* <Button
            variant="outlined"
            sx={{ borderRadius: "5px !important" }}
            startIcon={
              <FacebookOutlinedIcon
                sx={{ color: theme.palette.secondary.main }}
              />
            }
          >
            Facebook
          </Button> */}
        </Stack>
      </Box>
    </>
  );
};

export default SocialLogin;
