import { SxProps, Theme, styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';

const openedMixin = (theme: Theme, drawerWidth: number): SxProps => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  borderRight: `1px solid ${theme.palette.divider}`,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden',
  boxShadow: 'none'
});

const closedMixin = (theme: Theme): SxProps => ({
  width: 0,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  borderRight: 'none',
  boxShadow: theme.shadows[1]
});

const MiniDrawerStyled = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'drawerWidth'
})<{ open: boolean, drawerWidth: number }>(({ theme, open, drawerWidth }) => ({
  ...(open && {
    ...openedMixin(theme, drawerWidth),
    '& .MuiDrawer-paper': openedMixin(theme, drawerWidth)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}));

export default MiniDrawerStyled;
