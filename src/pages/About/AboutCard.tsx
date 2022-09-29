import {
  useTheme,
  Card,
  CardContent,
  Typography
} from "@mui/material";
import Box from "@mui/material/Box";

interface CardData {
  icon: any;
  title: string;
  description: string;
}
const AboutCard = ({ icon, title, description }: CardData) => {
  const theme = useTheme();
  return (
    <>
      <Card
        sx={{
          border: `1px solid ${theme.extraColor.borderColor}`,
          boxShadow:'none',
          display: "flex",
          pl: 0,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            pl: 0,
            pr:2,
          }}
        >
          <Box
            component="span"
            sx={{
              color: theme.palette.secondary.main,
              "& svg": {
                fontSize: "4rem",
                mt:1,
                ml:1
              },
            }}
          >
            {icon}
          </Box>
          <Box sx={{ ml: 2 }}>
            <Typography
              sx={{
                fontSize: "2.2rem",
                color: theme.extraColor.titleGray,
                fontWeight: 500,
              }}
            >
              {title}
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {description}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default AboutCard;
