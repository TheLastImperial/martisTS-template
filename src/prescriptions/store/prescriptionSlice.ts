import { createSlice } from "@reduxjs/toolkit";

interface Prescription {
  id: string
  description: string
}

interface IInitialState {
  prescriptions: Prescription[]
  count: number
}

const initialState:IInitialState = {
  prescriptions: [],
  count: 0
}

export const prescriptionSlice = createSlice({
  name: 'prescription',
  initialState,
  reducers: {
    onSetPrescriptions: (state, { payload })=> {
      state.prescriptions = payload.prescriptions;
      state.count = payload.count;
    },
    onCleanPrescriptions: (state)=> {
      state.prescriptions = [];
      state.count = 0;
    },
  }
});

export const {
  onSetPrescriptions,
  onCleanPrescriptions,
} = prescriptionSlice.actions;
