import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { Box, Typography, useTheme } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../config/firebase.config";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,

    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

// const SmallAvatar = styled(Avatar)(({ theme }) => ({
//   width: 22,
//   height: 22,
//   border: `2px solid ${theme.palette.background.paper}`,
// }));

// type DrawerProfileCardProps = {};

const DrawerProfileCard: React.FC = () => {
  const theme = useTheme();
  const [user] = useAuthState(auth);
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          // backgroundColor: theme.extraColor.white,
          // boxShadow: theme.myShadows.primary,
          // m: "24px",
          p: "24px",
        }}
      >
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            sx={{ width: 70, height: 70 }}
            alt={user?.displayName as string}
            src={user?.photoURL as string}
          />
        </StyledBadge>
        <Box
          sx={{
            py: 1,
            "& h6": {
              color: theme.palette.primary.main,
              fontWeight: 700,
            },
            "& p": {
              color: theme.palette.secondary.main,
              fontWeight: 700,
            },
          }}
        >
          <Typography component="h6">{user?.displayName}</Typography>
          <Typography component="p">Admin</Typography>
        </Box>
      </Box>
    </>
  );
};
export default DrawerProfileCard;
