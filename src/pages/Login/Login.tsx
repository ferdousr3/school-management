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

  Divider
  // useTheme,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import CustomLink from "../../common/CustomLink/CustomLink";
import PageTitle from "../../common/PageTitle/PageTitle";
import { styles } from "./Styles/LoginStyles";

interface State {
  password: string;
  showPassword: boolean;
}

export default function Login() {
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
      <PageTitle title="Login " />
      <Box sx={styles.main}>
        <LockOutlinedIcon sx={styles.icon} />
        <Typography component="h1" sx={styles.mainHeading}>
          Sign In
        </Typography>
        {/* social login component */}
        <SocialLogin />
        <Box sx={styles.orSection}>
          <Divider sx={{ width: "40%", mr: 2 }} /> or
          <Divider sx={{ width: "40%", ml: 2 }} />
        </Box>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
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
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, py: 1.5 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <CustomLink text="Forgot password?" url="/signUp" />
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
