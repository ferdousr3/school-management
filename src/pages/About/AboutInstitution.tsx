import {
  Container,
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useTheme
} from "@mui/material";
import data from "../../data/data";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { styles } from "./Styles/AboutInstitutionStyles";
// import aboutInst from '../../assets/event/openbooks.jpg'
import NewBooks from '../../assets/about/newBooks1.png'

const AboutInstitution = () => {
  const theme = useTheme()
  return (
    <>
      <Box sx={{ py: { sm: "4rem", xs: "2rem" } }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="sectionTitle" component="h1">
                About Our Institution
              </Typography>
              <Typography
                variant="description"
                component="p"
                sx={{ pt: "1rem" }}
              >
                {data.about.description}
              </Typography>
              <List>
                {data.about.items.map((item) => (
                  <ListItem>
                    <ListItemIcon>
                      <CheckBoxIcon
                        sx={{ color: theme.palette.secondary.main }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={styles.listTitle}
                      primary={item.details}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={6}  justifyContent='center' >
              <img src={NewBooks} alt="about us" width="90%" height="90%" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AboutInstitution;
