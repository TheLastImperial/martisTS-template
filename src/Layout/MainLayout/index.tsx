import { ReactNode, useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Toolbar, useMediaQuery } from '@mui/material';

// project import
import Drawer from './Drawer';
import Header from './Header';
import navigation from '../../menu-items';
// import Breadcrumbs from 'components/@extended/Breadcrumbs';

// types
import { useUIStore } from '../hooks/useUIStore';
import Breadcrumbs from '../components/Breadcrumbs';
import { Navigation } from '../interfaces';

const MainLayout = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();
  const matchDownLG = useMediaQuery(theme.breakpoints.down('lg'));
  const {  drawerOpen, startOpenDrawer } = useUIStore()

  // drawer toggler
  const [open, setOpen] = useState(drawerOpen);
  const handleDrawerToggle = () => {
    setOpen(!open);
    startOpenDrawer(!open);
  };

  // set media wise responsive drawer
  useEffect(() => {
    setOpen(!matchDownLG);
    startOpenDrawer(!matchDownLG);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownLG]);

  useEffect(() => {
    if (open !== drawerOpen) setOpen(drawerOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawerOpen]);

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header open={open} handleDrawerToggle={handleDrawerToggle} />
      <Drawer open={open} handleDrawerToggle={handleDrawerToggle} />
      <Box component="main"
        sx={{
          width: '100%',
          flexGrow: 1,
          p: { xs: 2, sm: 3 }
        }}>
        <Toolbar />
        <Breadcrumbs navigation={navigation as Navigation} title />
        { children }
      </Box>
    </Box>
  );
};

export default MainLayout;
