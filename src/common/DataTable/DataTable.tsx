import React, { useState } from "react";
import { DataGrid, GridColumns, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { styles } from "./Styles/DataTableStyles";

interface DataTableType {
  rows: any;
  columns: GridColumns;
  loading: any;
  getRowId: any;
}

const DataTable: React.FC<DataTableType> = ({
  rows,
  columns,
  loading,
  getRowId,
}) => {
  const [pageSize, setPageSize] = useState(5);

  return (
    <Box height="75vh" sx={styles.dataTable}>
      <DataGrid
        components={{ Toolbar: GridToolbar }}
        rows={rows}
        columns={columns}
        loading={loading}
        // checkboxSelection
        pagination
        getRowId={getRowId}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 15, 25]}
      />
    </Box>
  );
};

export default DataTable;
