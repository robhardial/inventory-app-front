import axios from "axios";

const getCars = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/warehouses/warehouse/inventory/${id}`,
    );
    console.log("Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    // Handle error appropriately in your application context
    return null;
  }
};

const createCars = async (id, carData) => {
  try {
    const response = await axios.post(
      `http://localhost:8080/warehouses/warehouse/inventory/${id}`,
      carData,
    );
    console.log("Car added:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding car:", error);
    return null;
  }
};

const editCars = async (id, carData) => {
  try {
    const response = await axios.put(
      `http://localhost:8080/warehouses/warehouse/inventory/${id}`,
      carData,
    );
    console.log("Car edited:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error editing car:", error);
    return null;
  }
};

const getCar = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/warehouses/warehouse/inventory/car/${id}`,
    );
    console.log("Car recieved:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error recieving car:", error);
    return null;
  }
};

const deleteCar = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:8080/warehouses/warehouse/inventory/car/${id}`,
    );
    console.log("Car deleted:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting car:", error);
    return null;
  }
};

export { getCars, createCars, editCars, getCar, deleteCar };
