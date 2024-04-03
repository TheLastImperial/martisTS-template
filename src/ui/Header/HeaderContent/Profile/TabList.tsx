import { ReactNode } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  List
} from '@mui/material';

interface TabListProps{
  children: ReactNode,
}
const TabList = ({ children }: TabListProps) => {
  const theme = useTheme();

  return (
    <List component="nav"
      sx={{
        p: 0,
        '& .MuiListItemIcon-root': {
          minWidth: 32,
          color: theme.palette.grey[500]
        }
      }}>
        {
          children
        }
    </List>
  );
};

export default TabList;
