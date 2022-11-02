import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddNewBlog from "./AddNewBlogs";
import Title from "./Title";

type BlogModalProps = {
  open: boolean;
  handleClose: () => void;
};

const AddBlogModal: React.FC<BlogModalProps> = ({ open, handleClose }) => {
  return (
    <>
      <Dialog open={open} fullWidth maxWidth="lg">
        <Box
          sx={{
            display: {
              sm: "flex",
            },
            justifyContent: { sm: "space-around" },
            alignItems: "center",
            width: "100%",
          }}
        >
          <DialogTitle id="alert-dialog-title">
            {/* title component */}
            <Title
              title="Add New Blog"
              description="Please fill all the field with valid information"
              position="left"
            />
          </DialogTitle>

          <Box sx={{ ml: 3, mt: "-10px" }}>
            {/* dialog close modal */}
            <Button
              variant="contained"
              color="error"
              endIcon={<CloseIcon />}
              onClick={handleClose}
              autoFocus
            >
              Close Modal
            </Button>
          </Box>
        </Box>
        <DialogContent>
          {/* blog component from add new blog */}
          <AddNewBlog />
        </DialogContent>
      </Dialog>
    </>
  );
};
export default AddBlogModal;
