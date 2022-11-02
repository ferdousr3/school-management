import * as React from "react";
import {
  Box,
  Grid,
  // Typography,
  Container,
  TextField,
  Divider,
  // useTheme,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import CustomLink from "../../common/CustomLink/CustomLink";
import PageTitle from "../../common/PageTitle/PageTitle";
import { styles } from "./Styles/LoginStyles";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormInputs } from "../../utils/Types";
import { LoginSchema } from "../../utils/YupSchema";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../config/firebase.config";
import { LoadingButton } from "@mui/lab";
import { FIREBASE_ERRORS } from "../../utils/FirebaseErrors";
import { locationProps } from "../../utils/Types";

export default function Login() {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const location: locationProps = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  /**
   * after login redirect path
   */
  React.useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  /**
   * react hooks from
   */
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(LoginSchema),
    mode: "onChange",
  });
  /**
   * from submit handler
   */
  const fromSubmitHandler: SubmitHandler<IFormInputs> = async (
    data: IFormInputs
  ) => {
    await signInWithEmailAndPassword(data.email, data.password);
    // toast.success("Sign Up Success");
  };

  return (
    <Container component="div" maxWidth="xs">
      <PageTitle title="Login " />
      <Box sx={styles.main}>
        <LockOutlinedIcon sx={styles.icon} />
        {/* social login component */}
        <SocialLogin />
        <Box sx={styles.orSection}>
          <Divider sx={{ width: "40%", mr: 2 }} /> or
          <Divider sx={{ width: "40%", ml: 2 }} />
        </Box>
        <Box
          component="form"
          onSubmit={handleSubmit(fromSubmitHandler)}
          sx={{ mt: 1 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue="Email Address"
                render={({ field }) => (
                  <TextField
                    type="email"
                    {...field}
                    autoComplete="email"
                    fullWidth
                    label="Email"
                    autoFocus
                    error={!!errors?.email}
                    helperText={errors.email ? errors.email?.message : ""}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="password"
                    fullWidth
                    label="Password"
                    autoFocus
                    error={!!errors?.password}
                    helperText={errors.password ? errors.password?.message : ""}
                  />
                )}
              />
            </Grid>
            {/* firebase error handler */}
            {error && (
              <Box sx={styles.errorMessages} component="p">
                {
                  FIREBASE_ERRORS[
                    error?.message as keyof typeof FIREBASE_ERRORS
                  ]
                }
              </Box>
            )}
          </Grid>
          {/* login button */}
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            loading={loading}
            sx={{ mt: 3, mb: 2, py: 1.5 }}
          >
            Sign In
          </LoadingButton>
          {/*others links */}
          <Grid container>
            <Grid item xs>
              <CustomLink text="Forgot password?" url="/forgotPassword" />
            </Grid>
            <Grid item>
              <CustomLink text="Don't have an account? Sign Up" url="/signUp" />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
