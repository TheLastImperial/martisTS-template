import { Box, Theme, useMediaQuery } from '@mui/material';

import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';
import { useUIStore } from 'src/ui/hooks/useUIStore';

const HeaderContent = () => {
  const { notifications } = useUIStore();
  const matchesXs = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );

  return (
    <>
      {!matchesXs && <Search />}
      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}

      <Notification notifications={ notifications }/>
      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;
