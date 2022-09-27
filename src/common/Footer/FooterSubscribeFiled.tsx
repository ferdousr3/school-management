import { Box, Button, FormControl, styled } from "@mui/material";
import InputBase from "@mui/material/InputBase";

const FooterSubscribeFiled = () => {
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
      borderRadius: "2rem",
      position: "relative",
      backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
      border: `1px solid rgba(53, 53, 53, 0.1)`,
      fontSize: 16,
      width: "320px",
      padding: "10px 12px",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
      ]),
      // Use the system font instead of the default Roboto font.
      "&:focus": {
        borderColor: theme.palette.secondary.main,
      },
    },
  }));

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          mt: 4,
        }}
      >
        <FormControl variant="standard">
          <BootstrapInput id="bootstrap-input" />
        </FormControl>
        <Button
          sx={{ position: "absolute", mr: 0.5 }}
          variant="contained"
          color="secondary"
        >
          Subscribe
        </Button>
      </Box>
    </>
  );
};

export default FooterSubscribeFiled;
