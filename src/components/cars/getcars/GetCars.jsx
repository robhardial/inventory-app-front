import React, { useState, useEffect } from "react";
import { GetCarsViews } from "./GetCarsViews";
import { getCars } from "../cars.api";
import { useParams } from "react-router-dom";

export const GetCars = () => {
  const [cars, setCars] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    (async () => {
      const data = await getCars(id);
      if (data) {
        const cleanedCars = data.map(
          ({ quantity, car: { make, model, price, year, carId } }) => ({
            id: carId,
            make,
            model,
            price,
            year,
            quantity,
          }),
        );
        setCars(cleanedCars);
      }
    })();
  }, [cars]);
  return <GetCarsViews cars={cars} />;
};
