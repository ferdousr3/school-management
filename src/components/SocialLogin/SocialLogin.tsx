import { Button, Stack, useTheme } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

const SocialLogin = () => {
  const theme = useTheme();
  return (
    <>
      <Stack direction="row" spacing={2} sx={{ my: 2 }}>
        <Button
          variant="outlined"
          sx={{ borderRadius: "5px !important" }}
          startIcon={
            <GoogleIcon sx={{ color: theme.palette.secondary.main }} />
          }
        >
          Google
        </Button>
        <Button
          variant="outlined"
          sx={{ borderRadius: "5px !important" }}
          startIcon={
            <FacebookOutlinedIcon
              sx={{ color: theme.palette.secondary.main }}
            />
          }
        >
          Facebook
        </Button>
      </Stack>
    </>
  );
};

export default SocialLogin;
