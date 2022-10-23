import { useEffect } from "react";
import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../config/firebase.config";
import { locationProps } from "../../utils/Types";
import { FIREBASE_ERRORS } from "../../utils/FirebaseErrors";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  // const theme = useTheme();
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  // const [token] = useToken(googleUser || fbUser);
  // Google singing
  const handleGoogleSignIn = (): void => {
    signInWithGoogle();
  };

  const navigate = useNavigate();

  const location: locationProps = useLocation();

  const from = location.state?.from?.pathname || "/";

  const TColor = "#00acee";
  // const fColor = "#4267B2";

  const loginItems = [
    {
      id: 1,
      title: " Continue with Google",
      color: TColor,
      icon: <FcGoogle />,
      onclick: handleGoogleSignIn,
    },
  ];
  useEffect(() => {
    if (googleUser) {
      navigate(from, { replace: true });
    }
  }, [googleUser, navigate, from, location]);

  return (
    <>
      <Box
        sx={{
          width: "80%",
        }}
      >
        <Box sx={{ mx: "auto" }}>
          {/* all errors  */}
          {googleError && (
            <Box
              component="p"
              sx={{
                color: "red",
                fontSize: ".875rem",
                mx: "auto",
                textAlign: "center",
              }}
            >
              {
                FIREBASE_ERRORS[
                  googleError?.message as keyof typeof FIREBASE_ERRORS
                ]
              }
            </Box>
          )}
        </Box>

        <Box
          sx={{
            my: 2,
          }}
        >
          {loginItems.map((item) => (
            <LoadingButton
              color="primary"
              loading={googleLoading}
              loadingPosition="start"
              variant="outlined"
              fullWidth={true}
              key={item.id}
              onClick={item.onclick}
              sx={{ borderRadius: "20px !important" }}
              startIcon={item.icon}
            >
              {item.title}
            </LoadingButton>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default SocialLogin;
