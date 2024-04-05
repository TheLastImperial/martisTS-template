import {
  Box,
  Toolbar,
  useMediaQuery,
  useTheme
} from "@mui/material";
import Header from "ui/Header";
import Drawer from 'ui/Drawer';
import { useUIStore } from "src/ui/hooks/useUIStore";
import { ReactNode, useEffect } from "react";
import { Breadcrumbs } from "./Drawer/DrawerContent/Breadcrumbs";

export const UI = ({ children }: { children: ReactNode })=>{
  const theme = useTheme();
  const matchDownLG = useMediaQuery(theme.breakpoints.down('lg'));
  const { menu, drawerOpen, startOpenDrawer } = useUIStore()
  // drawer toggler
  const handleDrawerToggle = () => {
    startOpenDrawer(!drawerOpen);
  };

  // set media wise responsive drawer
  useEffect(() => {
    startOpenDrawer(!matchDownLG);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownLG]);

  return (<>
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header open={drawerOpen} handleDrawerToggle={handleDrawerToggle}/>
      <Drawer open={drawerOpen} handleDrawerToggle={handleDrawerToggle}/>
      <Box component="main"
        sx={{
          width: '100%',
          flexGrow: 1,
          p: { xs: 2, sm: 3 }
        }}>
        <Toolbar />
        <Breadcrumbs navigation={menu} title />
        {
          children
        }
      </Box>
    </Box>
  </>);
}
