// material-ui
import { Box } from '@mui/material';

// project import
import { ReactNode } from 'react';
import { MainCard } from 'src/components';

interface AuthCardProps {
  children: ReactNode
}
export const AuthCard = ({ children, ...other }:AuthCardProps) => (
  <MainCard
    sx={{
      maxWidth: { xs: 400, lg: 475 },
      margin: { xs: 2.5, md: 3 },
      '& > *': {
        flexGrow: 1,
        flexBasis: '50%'
      }
    }}
    content={false}
    {...other}
    border={false}
    boxShadow
  >
    <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>{children}</Box>
  </MainCard>
);
