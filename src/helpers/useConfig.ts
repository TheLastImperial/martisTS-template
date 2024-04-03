import { useState } from "react";

export const useConfig = ()=>{
  const [ config, setConfig ] = useState({
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
    }
  });
  return {
    config,
    setConfig
  }
}
