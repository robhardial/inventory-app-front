import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid as MUIDataGrid } from "@mui/x-data-grid";

export const DataGrid = ({
  columns,
  rows,
  height,
  headerHeight = 2.5,
  hideColumn,
}) => {
  const [pageSize, setPageSize] = useState(5);
  /**
   * borderRadius is found on the .MuiDataGrid-root class but cant seem to target in in
   * styled components hence the use of the `sx prop` in MUIDataGrid
   */
  return (
    <Box sx={{ height, width: "100%" }}>
      <MUIDataGrid
        sx={{ borderRadius: 0 }}
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[2, 5, 10, 20]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        checkboxSelection={false}
        headerHeight={headerHeight * 16}
        disableColumnMenu={false}
        columnVisibilityModel={{
          status: false,
          [hideColumn]: false,
        }}
      />
    </Box>
  );
};
