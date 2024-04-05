import React, { useEffect, useState } from "react";
import { MiniDrawer } from "../../../layouts/Drawer";
import { DataGrid } from "../../../elements/datagrid/Datagrid";
import { Box, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { deleteWarehouse } from "../warehouses.api";

export const WarehouseView = ({ warehouses }) => {
  const handleDelete = async (id) => {
    try {
      // Send a DELETE request to the backend to delete the warehouse with the specified ID
      await deleteWarehouse(id);
      console.log(`Warehouse with ID ${id} deleted successfully.`);
      
    } catch (error) {
      console.error(`Error deleting warehouse with ID ${id}:`, error);
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 0 },
    {
      field: "name",
      flex: 1,
      headerName: "Name",
      minWidth: 40,
    },
    {
      field: "location",
      flex: 1,
      headerName: "Location",
      minWidth: 40,
    },
    {
      field: "maxCapacity",
      flex: 1,
      headerName: "Maximum Capacity",
      minWidth: 40,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      sortable: false,
      filterable: false,
      width: 180,
      renderCell: (params) => (
        <Stack direction="row" gap={2}>
          <Link to={`/getCars/${params.row.id}`}>
            <Button variant="contained" color="primary">
              View
            </Button>
          </Link>
          <Link to={`/editWarehouse/${params.row.id}`}>
            <Button variant="contained" color="primary">
              Edit
            </Button>
          </Link>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => handleDelete(params.row.id)}
          >
            Del
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <MiniDrawer>
      <Box my={4}>
        <Link to={"/addWarehouse"}>
          <Button variant="contained">Add Warehouse</Button>
        </Link>
      </Box>
      <DataGrid
        columns={columns}
        rows={warehouses.map((warehouse, index) => ({
          ...warehouse,
          id: warehouse.id,
        }))}
        rowHeight={2.7}
        height="27rem"
        headerHeight={2}
        hideColumn="id"
      />
    </MiniDrawer>
  );
};
