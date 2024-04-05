import React, { useState } from "react";
import { Box, TextField, Button, Stack } from "@mui/material";
import { MiniDrawer } from "../../../layouts/Drawer";
import { createCars } from "../cars.api";
import { Link, useParams } from "react-router-dom";
import { Decimal } from "decimal.js";

export const AddCarView = ({ onSumbit }) => {
  const { id } = useParams();

  
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(0);
  const [price, setPrice] = useState("0.00");
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const priceDecimal = new Decimal(price.toString());

      console.log(priceDecimal);
      // Make POST request to backend API
      const response = await createCars(id, {
        car: {
          make: make,
          model: model,
          year: year,
          price: priceDecimal,
          inventory: [],
        },
        quantity: quantity,
      });

      console.log("Car added successfully:", response);

      // Clear form 
      setMake("");
      setModel("");
      setPrice("");
      setYear(0);
      setQuantity(0);
    } catch (error) {
      console.error("Error creating car:", error);
    }
  };

  return (
    <MiniDrawer>
      <Box>
        <h2>Add Car</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Make"
            variant="outlined"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Model"
            variant="outlined"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            variant="outlined"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Year"
            variant="outlined"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Quantity"
            variant="outlined"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Stack direction="row" gap={2}>
            <Button type="submit" variant="contained" color="primary">
              Add Car
            </Button>

            <Link to={`/getCars/${id}`}>
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
