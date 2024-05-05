import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase, SxProps } from '@mui/material';
import { Logo } from './';

interface LogoWrapperProps {
  sx: SxProps
}

export const LogoWrapper = ({ sx }: LogoWrapperProps) => {
  return (
    <ButtonBase disableRipple
      component={Link}
      onClick={() => console.log('hola')}
      to={'/'}
      sx={sx}>
      <Logo />
    </ButtonBase>
  );
};
