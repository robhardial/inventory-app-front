import axios from "axios";

const getWarehouses = async () => {
  try {
    const response = await axios.get("http://localhost:8080/warehouses");
    console.log("Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching warehouses:", error);
    return null;
  }
};

const getWarehouseById = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/warehouses/warehouse/${id}`,
    );
    console.log("Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching warehouse:", error);
    return null;
  }
};

const editWarehouse = async (id, warehouseData) => {
  try {
    const response = await axios.put(
      `http://localhost:8080/warehouses/warehouse/${id}`,
      warehouseData,
    );
    console.log("Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error editing warehouse:", error);
    return null;
  }
};

const createWarehouse = async (warehouseData) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/warehouses/warehouse",
      warehouseData,
    );
    console.log("Warehouse created:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating warehouse:", error);
    return null;
  }
};

const deleteWarehouse = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:8080/warehouses/inventory/warehouse/${id}`,
    );
    console.log("Warehouse deleted:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting warehouse:", error);
    return null;
  }
};

export {
  getWarehouses,
  createWarehouse,
  deleteWarehouse,
  getWarehouseById,
  editWarehouse,
};
