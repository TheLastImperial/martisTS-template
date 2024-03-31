// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  openItem: ['dashboard'],
  defaultId: 'dashboard',
  openComponent: 'buttons',
  drawerOpen: false,
  componentDrawerOpen: true
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    activeItem(state, {payload}) {
      // state.openItem = action.payload.openItem;
      state.openItem = payload;
    },

    activeComponent(state, action) {
      state.openComponent = action.payload.openComponent;
    },

    openDrawer(state, action) {
      state.drawerOpen = action.payload.drawerOpen;
    },

    openComponentDrawer(state, action) {
      state.componentDrawerOpen = action.payload.componentDrawerOpen;
    }
  }
});

export const {
  activeItem,
  activeComponent,
  openDrawer,
  openComponentDrawer
} = uiSlice.actions;
