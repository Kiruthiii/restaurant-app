import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: "",
  timeSlot: "",
  tableId: null,
  guests: 0,
  price: 0,
  status: "idle", 
  tableType: "",

};

const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    setDate(state, action) {
      state.date = action.payload;
    },
    setTimeSlot(state, action) { 
      state.timeSlot = action.payload;
    },
    setTable(state, action) {
      state.tableId = action.payload.id;
      state.price = action.payload.price;
    },
    setGuests(state, action) {
      state.guests = action.payload;
    },
    setTableType(state, action) {
  state.tableType = action.payload;
},

    confirmReservation(state) {
      state.status = "confirmed";
    },
    resetReservation() {
      return initialState;
    },
  },
});

export const {
  setDate,
  setTimeSlot,
  setTable,
  setGuests,
  setTableType,
  confirmReservation,
  resetReservation,
} = reservationSlice.actions;

export default reservationSlice.reducer;
