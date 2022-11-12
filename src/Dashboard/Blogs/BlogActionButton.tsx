import React from "react";
import { Box, Tooltip } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

type BlogActionButtonProps = {
  params: any;
};

const BlogActionButton: React.FC<BlogActionButtonProps> = ({ params }) => {
  const handleBlogView = () => {
    console.log(params.row.slug);
  };
  return (
    <>
      <Box>
        <Tooltip title="View Blog" placement="top-start" arrow>
          <LoadingButton
            size="small"
            color="success"
            onClick={handleBlogView}
            // loading={loading}
            // loadingPosition="start"
            // startIcon={<SaveIcon />}
            variant="text"
          >
            <VisibilityIcon />
          </LoadingButton>
        </Tooltip>
        <Tooltip title="Edit Blog" placement="top-start" arrow>
          <LoadingButton size="small" color="info" variant="text">
            <EditIcon />
          </LoadingButton>
        </Tooltip>
        <Tooltip title="Delete Blog" placement="top-start" arrow>
          <LoadingButton size="small" color="error" variant="text">
            <DeleteIcon />
          </LoadingButton>
        </Tooltip>
      </Box>
    </>
  );
};
export default BlogActionButton;
