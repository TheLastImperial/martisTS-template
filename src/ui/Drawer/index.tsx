import { useMemo } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Drawer, ModalProps, useMediaQuery } from '@mui/material';

// project import
import DrawerHeader from './DrawerHeader';
import DrawerContent from './DrawerContent';
import MiniDrawerStyled from './MiniDrawerStyled';
import { useUIStore } from '../hooks/useUIStore';

interface MainDrawerProps {
  open: boolean;
  handleDrawerToggle: ModalProps['onClose'];
  window?: Window & Function;
};

const MainDrawer = ({ open, handleDrawerToggle, window }: MainDrawerProps) => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));
  const { drawerWidth } = useUIStore();

  // responsive drawer container
  const container = window !== undefined ?
    () => window().document.body :
    undefined;

  // header content
  const drawerContent = useMemo(() => <DrawerContent />, []);
  const drawerHeader = useMemo(() => <DrawerHeader open={open} />, [open]);

  return (
    <Box component="nav"
      sx={{ flexShrink: { md: 0 }, zIndex: 1300 }}
      aria-label="mailbox folders">
      {!matchDownMD ? (
        <MiniDrawerStyled variant="permanent"
          open={open}
          drawerWidth={drawerWidth}>
          {drawerHeader}
          {drawerContent}
        </MiniDrawerStyled>
      ) : (
        <Drawer
          container={container}
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              borderRight: `1px solid ${theme.palette.divider}`,
              backgroundImage: 'none',
              boxShadow: 'inherit'
            }
          }}
        >
          {open && drawerHeader}
          {open && drawerContent}
        </Drawer>
      )}
    </Box>
  );
};

export default MainDrawer;
