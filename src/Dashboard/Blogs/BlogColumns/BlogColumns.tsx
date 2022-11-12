import BlogActionButton from "../BlogActionButton";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import FeedbackIcon from "@mui/icons-material/Feedback";
import { Avatar, Button } from "@mui/material";
export const columns = [
  {
    field: "title",
    headerName: "Title",
    flex: 1.1,
  },
  {
    field: "image",
    headerName: "Image",
    flex: 0.75,
    renderCell: (params: any) => (
      <Avatar alt="Remy Sharp" src={params.row.image as string} />
    ),
  },
  { field: "author", headerName: "Author", flex: 1 },
  { field: "category", headerName: "Category", flex: 1 },
  { field: "date", headerName: "Date", flex: 1 },
  {
    field: "status",
    headerName: "Status",
    cellClassName: "status-column--cell",
    flex: 1,
    renderCell: (params: any) => {
      if (params?.row?.status === "pending") {
        return (
          <Button
            variant="text"
            color="info"
            sx={{ borderRadius: "4px !important" }}
            startIcon={<AutorenewIcon />}
          >
            {params?.row?.status}
          </Button>
        );
      }
      if (params?.row?.status === "requested") {
        return (
          <Button
            variant="text"
            color="warning"
            sx={{ borderRadius: "4px !important" }}
            startIcon={<FeedbackIcon />}
          >
            {params?.row?.status}
          </Button>
        );
      }

      return (
        <Button
          variant="text"
          color="success"
          sx={{ borderRadius: "4px !important" }}
          startIcon={<CheckCircleOutlineIcon />}
        >
          {params?.row?.status}
        </Button>
      );
    },
  },
  {
    field: "action",
    headerName: "Action",
    flex: 1.5,
    renderCell: (params: any) => <BlogActionButton {...{ params }} />,
  },
];
