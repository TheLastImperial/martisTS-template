import { createSlice } from "@reduxjs/toolkit";
import { PatientStore } from "../patients";

const initialState: PatientStore = {
  patients: [],
  count: 0,
};

export const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    onSetPatients: (state, { payload })=>{
      state.patients = payload.eventos;
      state.count = payload.total;
    }
  }
});

export const { onSetPatients } = patientsSlice.actions;
