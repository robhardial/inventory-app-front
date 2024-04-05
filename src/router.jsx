import React from "react";
import { useRoutes } from "react-router-dom";

import { Warehouse } from "./components/warehouses/getwarehouses/GetWarehouse";
import { AddWarehouse } from "./components/warehouses/addwarehouse/AddWarehouse";
import { GetCars } from "./components/cars/getcars/GetCars";
import { AddCar } from "./components/cars/addcar/AddCar";
import { EditWarehouse } from "./components/warehouses/editwarehouse/EditWarehouse";
import { EditCar } from "./components/cars/editcar/EditCar";

const Routes = () =>
  useRoutes([
    {
      path: "/",
      element: <Warehouse />,
    },
    {
      path: "/addWarehouse",
      element: <AddWarehouse />,
    },
    {
      path: "/getCars/:id",
      element: <GetCars />,
    },
    {
      path: "/addCar/:id",
      element: <AddCar />,
    },
    {
      path: "/editWarehouse/:id",
      element: <EditWarehouse />,
    },
    {
      path: "/editCar",
      element: <EditCar />,
    },
  ]);
export default Routes;
