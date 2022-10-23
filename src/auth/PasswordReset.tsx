import * as React from "react";
import { Box, Container, TextField } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PageTitle from "../common/PageTitle/PageTitle";
import { styles } from "./Styles/PasswordResetStyles";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormInputs } from "../utils/Types";
import { PassReset } from "../utils/YupSchema";
import { LoadingButton } from "@mui/lab";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../config/firebase.config";
import { toast } from "react-toastify";
import { FIREBASE_ERRORS_PASS } from "../utils/FirebaseErrors";

const PasswordReset = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  // react hooks from
  const {
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(PassReset) });

  // const regEmail = RegExp( /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/)
  const forgotPassword = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const email = watch("email");

    await sendPasswordResetEmail(email);
    reset();

    toast("Rest email send");
  };

  return (
    <Container component="div" maxWidth="xs">
      <PageTitle title="Forgot Password " />
      <Box sx={styles.main}>
        <Box sx={{ mt: 1 }}>
          <Box sx={styles.mainHeading}>
            <Controller
              name="email"
              control={control}
              defaultValue="Email Address"
              render={({ field }) => (
                <TextField
                  required
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
          </Box>
          {error && (
            <Box sx={styles.errorMessages} component="p">
              {
                FIREBASE_ERRORS_PASS[
                  error?.message as keyof typeof FIREBASE_ERRORS_PASS
                ]
              }
            </Box>
          )}
          <LoadingButton
            onClick={forgotPassword}
            fullWidth
            variant="contained"
            loading={sending}
            sx={{ mt: 3, mb: 2, py: 1.5 }}
            endIcon={<ArrowRightAltIcon />}
          >
            Reset Password
          </LoadingButton>
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordReset;
