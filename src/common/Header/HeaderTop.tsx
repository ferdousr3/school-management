import ForwardToInboxRoundedIcon from "@mui/icons-material/ForwardToInboxRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import React from "react";
// import { useNavigate } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { styles } from "./Styles/HeaderStyles";

// type HeaderTopProps = {

// };

const HeaderTop: React.FC = () => {
  // const navigate = useNavigate();
  // const theme = useTheme();

  return (
    <>
      <Container>
        <Box sx={styles.headerTopMain}>
          <Box sx={styles.headerTopLeft}>
            <Box sx={styles.headerTopLeftElement}>
              <a href="tel:123-456-7890" target="_top">
                <LocalPhoneRoundedIcon />
                123-456-7890
              </a>
            </Box>
            <Box sx={styles.headerTopLeftElement}>
              <a href="mailto:bgreekcode@gmail.com?Subject=Hello" target="_top">
                <ForwardToInboxRoundedIcon />
                bgreekcode@gmail.com
              </a>
            </Box>
          </Box>
          <Box sx={styles.headerTopRight}>Live Chat</Box>
        </Box>
      </Container>
    </>
  );
};
export default HeaderTop;
