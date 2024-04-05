import React, { useState } from "react";
import { Box, TextField, Button, Stack } from "@mui/material";
import { MiniDrawer } from "../../../layouts/Drawer";
import { createWarehouse } from "../warehouses.api";
import { Link } from "react-router-dom";

export const AddWarehouseView = ({ onSubmit }) => {
  
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState("");

  //handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to backend API
      const response = await createWarehouse({
        warehouseName: name,
        location: location,
        maxCapacity: capacity,
      });

      console.log("Warehouse created successfully:", response);
      setName("");
      setLocation("");
      setCapacity("");
    } catch (error) {
      console.error("Error creating warehouse:", error);
    }
  };

  return (
    <MiniDrawer>
      <Box>
        <h2>Add Warehouse</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Location"
            variant="outlined"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Capacity"
            variant="outlined"
            type="number"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Stack direction="row" gap={2}>
            <Button type="submit" variant="contained" color="primary">
              Add Warehouse
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
