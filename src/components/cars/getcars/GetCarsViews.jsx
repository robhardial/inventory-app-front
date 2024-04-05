import React from "react";
import { MiniDrawer } from "../../../layouts/Drawer";
import { Button, Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { DataGrid } from "../../../elements/datagrid/Datagrid";
import { useParams } from "react-router-dom";
import { deleteCar } from "../cars.api";

export const GetCarsViews = ({ cars }) => {
  const { id } = useParams();

  const handleDelete = async (id) => {
    try {
      // Send a DELETE request to the backend to delete the car with the specified ID
      const response = await deleteCar(id);
      console.log(`Car with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error(`Error deleting car with ID ${id}:`, error);
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 0 },
    {
      field: "make",
      flex: 1,
      headerName: "Make",
      minWidth: 40,
    },
    {
      field: "model",
      flex: 1,
      headerName: "Model",
      minWidth: 40,
    },
    {
      field: "price",
      flex: 1,
      headerName: "Price",
      minWidth: 40,
    },
    {
      field: "year",
      flex: 1,
      headerName: "Year",
      minWidth: 40,
    },
    {
      field: "quantity",
      flex: 1,
      headerName: "Quantity",
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
          <Link to={`/editCar?id=${params.row.id}&urlId=${id}`}>
            <Button variant="contained" color="primary">
              Edit
            </Button>
          </Link>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              // Call handleDelete function with the car ID
              handleDelete(params.row.id);
            }}
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
        <Link to={`/addCar/${id}`}>
          <Button variant="contained">Add Car</Button>
        </Link>
      </Box>
      <DataGrid
        columns={columns}
        rows={cars.map((car) => ({ ...car, id: car.id }))}
        rowHeight={2.7}
        height="27rem"
        headerHeight={2}
        hideColumn="id"
      />
    </MiniDrawer>
  );
};
