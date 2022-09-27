import * as React from "react";
import {
  Button,
  Box,
  Checkbox,
  Avatar,
  Grid,
  Typography,
  Container,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  IconButton,
  TextField,
  FormControlLabel,
  useTheme,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import CustomLink from "../../common/CustomLink/CustomLink";
import PageTitle from "../../common/PageTitle/PageTitle";

interface State {
  password: string;
  showPassword: boolean;
}

export default function Login() {
  const [values, setValues] = React.useState<State>({
    password: "",
    showPassword: false,
  });
  const theme = useTheme();
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
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: {
            sm: `1px solid ${theme.extraColor.borderColor}`,
          },
          padding: {
            sm: "1rem 2rem",
          },
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in with
        </Typography>
        {/* social login component */}
        <SocialLogin />
        or
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
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
