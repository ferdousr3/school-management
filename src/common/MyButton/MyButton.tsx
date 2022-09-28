import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MyButton = ({ text, url }: { text: string; url: string }) => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        sx={{
          fontSize: "1rem !important",
          textTransform: "uppercase !important",
          textDecoration: "none",
          padding: ".5rem 30px",
          fontWeight:'700 !important'
        }}
        onClick={() => navigate(`/${url}`)}
      >
        {text}
      </Button>
    </>
  );
};

export default MyButton;
