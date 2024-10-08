// material-ui
import { useTheme } from '@mui/material/styles';
import { Stack, Chip } from '@mui/material';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';
import { Logo } from 'src/components';

interface DrawerHeaderProps {
  open: boolean
};

const DrawerHeader = ({ open }: DrawerHeaderProps) => {
  const theme = useTheme();

  return (
    // only available in paid version
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Logo />
        <Chip
          label='I'
          size="small"
          sx={{
            height: 16,
            '& .MuiChip-label': {
              fontSize: '0.625rem',
              py: 0.25
            }
          }}
          component="a"
          clickable
        />
      </Stack>
    </DrawerHeaderStyled>
  );
};

export default DrawerHeader;
