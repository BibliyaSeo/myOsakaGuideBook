import {createSlice} from '@reduxjs/toolkit';

// interface  {

// }

const initialState = {
  restaurantData: [],
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setRestaurantData: (state, action) => {
      state.restaurantData = action.payload;
    },
  },
});

export const {setRestaurantData} = restaurantSlice.actions;

// export const selectCount = (state: RootState) => state.destination.value;

export default restaurantSlice.reducer;
