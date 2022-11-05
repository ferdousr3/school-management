import React, { useState } from "react";
import { DataGrid, GridColumns, GridToolbar } from "@mui/x-data-grid";
import { Box, useTheme } from "@mui/material";

interface DataTableType {
  rows: any;
  columns: GridColumns;
  loading: any;
  sx: any;
  getRowId: any;
}

const DataTable: React.FC<DataTableType> = ({
  rows,
  columns,
  loading,
  sx,
  getRowId,
}) => {
  const theme = useTheme();
  const [pageSize, setPageSize] = useState(2);

  return (
    <Box
      m="40px 0 0 0"
      height="65vh"
      sx={{
        // "& .MuiDataGrid-root": {
        //   border: "none",
        // },
        "& .MuiDataGrid-cell": {
          fontSize: ".80rem !important",
          fontFamily: `${theme.myFont} !important`,
        },
        "& .status-column--cell": {
          color: theme.palette.secondary.main,
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: theme.palette.primary.main,
          borderBottom: "none",
          color: theme.extraColor.white,
          fontWeight: 900,
          fontSize: ".80rem !important",
          fontFamily: `${theme.myFont} !important`,
        },
        // "& .MuiDataGrid-columnHeaderTitleContainerContent": {
        //   ml: 2,
        // },
        // "& .MuiDataGrid-iconSeparator": {
        //   ml: 4,
        // },
        "& .MuiDataGrid-columnHeaderTitle": {
          color: theme.extraColor.white,
          fontWeight: 700,
        },
        "& .MuiDataGrid-sortIcon": {
          color: theme.extraColor.white,
          fontWeight: 700,
        },
        "& .MuiSvgIcon-fontSizeSmall": {
          color: theme.extraColor.white,
          fontWeight: 700,
        },
        "& .MuiDataGrid-cellContent": {
          color: theme.extraColor.linkBlack,
          fontWeight: 600,
        },

        // "& .MuiDataGrid-virtualScroller": {
        //   backgroundColor: theme.palette.primary.main,
        // },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: theme.palette.primary.main,
        },
        "& .MuiTablePagination-selectLabel": {
          color: theme.extraColor.white,
          fontWeight: 700,
        },
        "& .MuiInputBase-root ": {
          color: theme.extraColor.white,
          fontWeight: 700,
        },
        "& .MuiTablePagination-displayedRows ": {
          color: theme.extraColor.white,
          fontWeight: 700,
        },
        "& .MuiCheckbox-root": {
          color: `${theme.palette.secondary.main} !important`,
        },
      }}
      // sx={{
      //   "& .MuiDataGrid-root": {
      //     border: "none",
      //   },
      //   "& .MuiDataGrid-cell": {
      //     borderBottom: "none",
      //   },
      //   "& .pending-column--cell": {
      //     color: theme.palette.primary.main,
      //   },
      //   "& .MuiDataGrid-columnHeaders": {
      //     backgroundColor: theme.palette.primary.main,
      //     borderBottom: "none",
      //     color: theme.extraColor.white,
      //     //     fontWeight: 700,
      //   },
      //   // "& .MuiDataGrid-virtualScroller": {
      //   //   backgroundColor: colors.primary[400],
      //   // },
      //   "& .MuiDataGrid-footerContainer": {
      //     borderTop: "none",
      //     backgroundColor: theme.palette.primary.main,
      //   },
      //   "& .MuiCheckbox-root": {
      //     color: `${theme.palette.secondary.main} !important`,
      //   },
      //   "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
      //     color: `${theme.palette.primary.main} !important`,
      //   },
      // }}
    >
      <DataGrid
        components={{ Toolbar: GridToolbar }}
        rows={rows}
        columns={columns}
        loading={loading}
        sx={sx}
        checkboxSelection
        pagination
        getRowId={getRowId}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[2, 15, 25]}
      />
    </Box>
  );
};

export default DataTable;
