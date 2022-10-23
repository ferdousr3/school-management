import React, { FC, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  TextField,
  Divider,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import CustomLink from "../../common/CustomLink/CustomLink";
import PageTitle from "../../common/PageTitle/PageTitle";
import { styles } from "./Styles/SignUpStyles";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormInputs } from "../../utils/Types";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../config/firebase.config";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import { LoginSchema } from "../../utils/YupSchema";


const SignUp: FC = () => {
  const [createUserWithEmailAndPassword, user, emailLoading, emailError] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate()

   useEffect(() => {
     if (user) {
       navigate("/login");
     }
   }, [user, updating, navigate]);
  
  // react hooks from
  const {
    handleSubmit,
    control,
    // watch,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(LoginSchema) });

  // error handling
  let signInError;
  if (emailError || updateError) {
    signInError = (
      <p className="label-text-alt text-red-600 mb-3 ml-1">
        {emailError?.message || updateError?.message}
      </p>
    );
  }

  // from submit
  const fromSubmitHandler: SubmitHandler<IFormInputs> = async (
    data: IFormInputs
  ) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    reset();
    console.log("first from data ", data);
    // toast.success("Sign Up Success");
  };

  return (
    <Container component="div" maxWidth="xs">
      <PageTitle title="Sign Up " />
      <Box sx={styles.main}>
        <PersonAddIcon sx={styles.icon} />
        <Typography component="h1" sx={styles.mainHeading}>
          Sign Up
        </Typography>
        {/* social login component */}
        <SocialLogin />
        <Box sx={styles.orSection}>
          <Divider sx={{ width: "40%", mr: 2 }} /> or
          <Divider sx={{ width: "40%", ml: 2 }} />
        </Box>
        <Box
          component="form"
          onSubmit={handleSubmit(fromSubmitHandler)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="name"
                control={control}
                defaultValue="Jon"
                render={({ field }) => (
                  <TextField
                    type="text"
                    {...field}
                    autoComplete="given-name"
                    fullWidth
                    label="Name"
                    autoFocus
                    error={!!errors?.name}
                    helperText={errors.name ? errors.name?.message : ""}
                  />
                )}
              />
            </Grid>
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
          </Grid>
          {signInError}
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            loading={emailLoading}
            sx={{ mt: 3, mb: 2, py: 1.5 }}
          >
            Sign Up
          </LoadingButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <CustomLink
                text="Already have an account? Sign in"
                url="/login"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
export default SignUp;
