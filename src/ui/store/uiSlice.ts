import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    drawerWidth: 260,
    twitterColor: '#1DA1F2',
    facebookColor: '#3b5998',
    linkedInColor: '#0e76a8',
    config: {
      defaultPath: '/dashboard/default',
      fontFamily: `'Public Sans', sans-serif`,
      i18n: 'en',
      miniDrawer: false,
      container: true,
      mode: 'light',
      presetColor: 'default',
      themeDirection: 'ltr'
    },
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
      {
        primaryTxt: 'Soy el texto primario',
        secondaryTxt: 'Soy el texto secundario',
        caption: '10:00 AM',
      },
    ]
  },
  reducers: {
    onSetDefaultPath: (state, { payload })=>{
      state.config.defaultPath = payload
    }
  }
});

export const { onSetDefaultPath } = uiSlice.actions;
