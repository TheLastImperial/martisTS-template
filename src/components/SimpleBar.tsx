// material-ui
import { SxProps, alpha, styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// third-party
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { BrowserView, MobileView } from 'react-device-detect';
import { ReactNode } from 'react';

// root style
const RootStyle = styled(BrowserView)({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden'
});

// scroll bar wrapper
const SimpleBarStyle = styled(SimpleBar)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[500], 0.48)
    },
    '&.simplebar-visible:before': {
      opacity: 1
    }
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6
  },
  '& .simplebar-mask': {
    zIndex: 'inherit'
  }
}));

interface SimpleBarScroll {
  children: ReactNode;
  sx: SxProps
};

export function SimpleBarScroll({
  children,
  sx,
  ...other
}: SimpleBarScroll) {
  return (
    <>
      <RootStyle>
        <SimpleBarStyle //timeout={500}
          clickOnTrack={false}
          sx={sx}
          {...other}>
          {children}
        </SimpleBarStyle>
      </RootStyle>
      <MobileView>
        <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
          {children}
        </Box>
      </MobileView>
    </>
  );
}
