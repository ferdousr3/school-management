import * as React from "react";
import {
  Button,
  Box,
  Grid,
  Typography,
  Container,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  IconButton,
  TextField,
  // useTheme,
  Divider,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import SocialLogin from "../../components/SocialLogin/SocialLogin";
import CustomLink from "../../common/CustomLink/CustomLink";
import PageTitle from "../../common/PageTitle/PageTitle";
import { styles } from "./Styles/SignUpStyles";

interface State {
  password: string;
  showPassword: boolean;
}
export default function SignUp() {
  const [values, setValues] = React.useState<State>({
    password: "",
    showPassword: false,
  });
  // const theme = useTheme();
  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="div" maxWidth="xs">
      <PageTitle title="Sign Up " />
      <Box
        sx={styles.main}
      >
        <PersonAddIcon
          sx={styles.icon}
        />
        <Typography component="h1" variant="h5">
          Sign up with
        </Typography>
        {/* social login component */}
        <SocialLogin />
        <Box
          sx={styles.orSection}
        >
          <Divider sx={{ width: "40%",mr:2 }} /> or
          <Divider sx={{ width: "40%",ml:2 }} />
        </Box>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ mt: 1, width: "100%" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, py: 1.5 }}
          >
            Sign Up
          </Button>
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
}
