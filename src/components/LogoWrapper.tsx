import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase, SxProps } from '@mui/material';

// project import
import { Logo } from '../auth/components';

// ==============================|| MAIN LOGO ||============================== //

interface LogoWrapperProps {
  sx: SxProps
}
export const LogoWrapper = ({ sx }: LogoWrapperProps) => {
  return (
    <ButtonBase disableRipple component={Link} onClick={() => console.log('hola')} to={'/'} sx={sx}>
      <Logo />
    </ButtonBase>
  );
};
