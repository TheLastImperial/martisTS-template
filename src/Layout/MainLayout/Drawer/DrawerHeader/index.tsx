// material-ui
import { useTheme } from '@mui/material/styles';
import { Stack, Chip } from '@mui/material';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';
import { Logo } from '../../../../components';
import { getEnvVariables } from '../../../../helpers';

interface DrawerHeaderProps {
  open: boolean
};

const DrawerHeader = ({ open }: DrawerHeaderProps) => {
  const theme = useTheme();
  const { VITE_REACT_APP_VERSION } = getEnvVariables();

  return (
    // only available in paid version
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Logo />
        <Chip
          label={VITE_REACT_APP_VERSION}
          size="small"
          sx={{
            height: 16,
            '& .MuiChip-label': {
              fontSize: '0.625rem',
              py: 0.25
            }
          }}
          component="a"
          href="https://github.com/codedthemes/mantis-free-react-admin-template"
          target="_blank"
          clickable
        />
      </Stack>
    </DrawerHeaderStyled>
  );
};

export default DrawerHeader;
