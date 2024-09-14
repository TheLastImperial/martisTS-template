import { Box, Theme, useMediaQuery } from '@mui/material';

import Profile from './Profile';
import MobileSection from './MobileSection';

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );

  return (
    <>
      {!matchesXs &&
        <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }}/>
      }
      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}

      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;
