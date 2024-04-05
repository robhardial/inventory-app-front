import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Stack } from "@mui/material";
import { MiniDrawer } from "../../../layouts/Drawer";
import { Link, useParams } from "react-router-dom";
import { getWarehouseById, editWarehouse } from "../warehouses.api";

export const EditWarehouseView = () => {
  const { id } = useParams();

  const [warehouseData, setWarehouseData] = useState({
    warehouseName: "",
    location: "",
    maxCapacity: 0,
  });

  useEffect(() => {
    const fetchWarehouseData = async () => {
      try {
        // Fetch warehouse data by ID from the server
        const response = await getWarehouseById(id);
        // Update state with fetched data
        setWarehouseData(response);
      } catch (error) {
        console.error(`Error fetching warehouse data for ID ${id}:`, error);
      }
    };

    fetchWarehouseData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWarehouseData({
      ...warehouseData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetch warehouse data by ID from the server
      const response = await editWarehouse(id, warehouseData);
      // Update state with fetched data
      setWarehouseData({
        warehouseName: "",
        location: "",
        maxCapacity: 0,
      });
      console.log("Warehouse edited successfully:", response);
    } catch (error) {
      console.error(`Error updating warehouse data for ID ${id}:`, error);
    }
  };

  return (
    <MiniDrawer>
      <Box>
        <h2>Edit Warehouse</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Warehouse Name"
            variant="outlined"
            name="warehouseName"
            value={warehouseData.warehouseName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Location"
            variant="outlined"
            name="location"
            value={warehouseData.location}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Max Capacity"
            variant="outlined"
            name="maxCapacity"
            type="number"
            value={warehouseData.maxCapacity}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          <Stack direction="row" gap={2}>
            <Button type="submit" variant="contained" color="primary">
              Edit Warehouse
            </Button>

            <Link to="/">
              <Button variant="contained" color="primary">
                Back
              </Button>
            </Link>
          </Stack>
        </form>
      </Box>
    </MiniDrawer>
  );
};
