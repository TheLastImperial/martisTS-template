import { createSlice } from "@reduxjs/toolkit";
import { PatientStore } from "../patients";



const initialState: PatientStore = {
  patients: [],
  currentPatient: null,
  count: 0,
};

export const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    onSetPatients: (state, { payload })=>{
      state.patients = payload.patients;
      state.count = payload.count;
    },

    onSetCurrentPatient: (state, { payload }) => {
      state.currentPatient = payload;
    }
  }
});

export const { onSetPatients, onSetCurrentPatient } = patientsSlice.actions;
