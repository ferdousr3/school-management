import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import CourseCard from './CourseCard';

const Course = () => {
    return (
        <>
        <Box sx={{ py: { sm: "2rem", xs: "2rem" } }}>
          <Container>
            <Grid container>
              <CourseCard />
            </Grid>
          </Container>
        </Box>
      </>
    );
};

export default Course;