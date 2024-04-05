import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Stack } from "@mui/material";
import { MiniDrawer } from "../../../layouts/Drawer";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { editCars } from "../cars.api";
import { Decimal } from "decimal.js";
import { getCar } from "../cars.api";

export const EditCarView = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const carId = searchParams.get("id");
  const warehouseId = searchParams.get("urlId");

  const [carData, setCarData] = useState({
    carId: 0,
    make: "",
    model: "",
    year: 0,
    price: "0.00",
  });

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        // Fetch car data by ID from the server
        const response = await getCar(carId);
        console.log(response);
        // Update state with fetched data
        setCarData({
          carId: response.car.carId,
          make: response.car.make,
          model: response.car.model,
          year: response.car.year,
          price: response.car.price.toFixed(2), // Assuming price is a number
        });

        // Update quantity state
        setQuantity(response.quantity);
      } catch (error) {
        console.error(`Error fetching car data for ID ${carId}:`, error);
      }
    };

    fetchCarData();
  }, [carId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const priceDecimal = new Decimal(carData.price.toString());

      const requestData = {
        car: {
          carId: carId,
          make: carData.make,
          model: carData.model,
          year: carData.year,
          price: priceDecimal,
        },
        quantity: quantity,
      };

      // request to update the car data
      const response = await editCars(warehouseId, requestData);

      // Update state and reset form
      setCarData({
        carId: 0,
        make: "",
        model: "",
        year: 0,
        price: "0.00",
      });
      setQuantity(0);

      console.log("Car edited successfully:", response);
    } catch (error) {
      console.error(`Error updating car data for ID ${carId}:`, error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData({
      ...carData,
      [name]: value,
    });
  };

  return (
    <MiniDrawer>
      <Box>
        <h2>Edit Car</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Make"
            variant="outlined"
            name="make"
            value={carData.make}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Model"
            variant="outlined"
            name="model"
            value={carData.model}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            variant="outlined"
            name="price"
            type="number"
            value={carData.price}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Year"
            variant="outlined"
            name="year"
            type="number"
            value={carData.year}
            onChange={handleChange}
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
              Edit Car
            </Button>

            <Link to={`/getCars/${warehouseId}`}>
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
