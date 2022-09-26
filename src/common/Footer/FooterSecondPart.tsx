import {
  Box,
  Typography,
  ListItem,
  useTheme,
  
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import data from "../../data/data";
import { Link } from "react-router-dom";

const FooterSecondPart = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ pt: ".75rem" }}>
        <Typography variant="footerTitle">QUICK LINKS</Typography>
        <Box sx={{ pt: '2.5rem' }}>
          {data.footerLink.map((item) => (
            <ListItem
              key={item.id}
              sx={{ py: 0, mb: 1.25, color:theme.extraColor.linkBlack }}
              component={Link}
              to={item.path}
            >
              <ArrowRightAltIcon
                sx={{ color: theme.palette.secondary.main, mr: 1 }}
              />
              {item.text}
            </ListItem>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default FooterSecondPart;
