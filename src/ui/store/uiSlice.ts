import { createSlice } from "@reduxjs/toolkit";
import { UIState } from "../interfaces";
import { menu } from "./menu";

const initialState: UIState = {
  drawerWidth: 260,
  twitterColor: '#1DA1F2',
  facebookColor: '#3b5998',
  linkedInColor: '#0e76a8',
  drawerOpen: false,
  openItem: ['dashboard'],
  config: {
    defaultPath: '/dashboard/default',
    fontFamily: `'Public Sans', sans-serif`,
    i18n: 'en',
    miniDrawer: false,
    container: true,
    mode: 'light',
    darkMode: false,
    presetColor: 'default',
    themeDirection: 'ltr'
  },
  menu: menu,
  notifications: [
    {
      primaryTxt: 'Soy el texto primario',
      secondaryTxt: 'Soy el texto secundario',
      caption: '10:00 AM',
    },
    {
      primaryTxt: 'Soy el texto primario',
      secondaryTxt: 'Soy el texto secundario',
      caption: '10:00 AM',
    },
    {
      primaryTxt: 'Soy el texto primario',
      secondaryTxt: 'Soy el texto secundario',
      caption: '10:00 AM',
    },
  ],
  loading: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    onSetDefaultPath: (state, { payload })=>{
      state.config.defaultPath = payload
    },
    onSetNotifications: (state, { payload })=>{
      state.notifications = payload;
    },
    onSetOpenItem: (state, { payload })=>{
      state.openItem = payload;
    },
    onSetDraweOpen: (state, { payload })=>{
      state.drawerOpen = payload;
    },
    onSetLoading: (state, { payload })=> {
      state.loading = payload;
    },
    onSetMode: (state, { payload }) => {
      state.config.darkMode = payload;
      state.config.mode = payload ? 'dark' : 'light';
    },
  }
});

export const {
  onSetDefaultPath,
  onSetNotifications,
  onSetOpenItem,
  onSetDraweOpen,
  onSetLoading,
  onSetMode,
} = uiSlice.actions;
