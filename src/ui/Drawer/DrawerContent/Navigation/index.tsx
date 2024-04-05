// material-ui
import { Box, Typography } from '@mui/material';

// project import
import NavGroup from './NavGroup';
import { useUIStore } from 'src/ui/hooks/useUIStore';

const Navigation = () => {
  const { menu } = useUIStore()
  const navGroups = menu.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={ item } />;
      default:
        return (
          <Typography
            key={item.id}
            variant="h6"
            color="error"
            align="center">
            Fix - Navigation Group
          </Typography>
        );
    }
  });

  return <Box sx={{ pt: 2 }}>{navGroups}</Box>;
};

export default Navigation;
