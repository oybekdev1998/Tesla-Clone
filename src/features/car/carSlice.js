import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  car: ['Model 3', 'Model Y', 'Model S', 'Model X']
}

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
})

export const selectCar = state => state.car.cars
export default carSlice.reducer