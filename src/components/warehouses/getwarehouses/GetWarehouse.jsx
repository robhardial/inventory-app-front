import React, { useState, useEffect } from "react";
import { WarehouseView } from "./GetWarehouseView";
import { getWarehouses } from "../warehouses.api";

export const Warehouse = () => {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getWarehouses();
      if (data) {
        const cleanedWarehouse = data.map(
          ({ warehouseId, warehouseName, location, maxCapacity }) => ({
            id: warehouseId,
            name: warehouseName,
            location,
            maxCapacity,
          }),
        );
        setWarehouses(cleanedWarehouse);
      }
    })(); 
  }, [warehouses]);
  return <WarehouseView warehouses={warehouses} />;
};
