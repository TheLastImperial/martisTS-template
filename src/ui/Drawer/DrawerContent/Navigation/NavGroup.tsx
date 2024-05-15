import { Box, Collapse, List, Stack, Typography } from '@mui/material';

// project import
import NavItem from './NavItem';
import { useUIStore } from 'src/ui/hooks/useUIStore';
import { Menu } from 'src/ui/interfaces';
import { AnimateButton } from 'src/components';
import { DownOutlined, LeftOutlined } from '@ant-design/icons';
import { useState } from 'react';

interface NavGroupProps {
  item: Menu
};

const NavGroup = ({ item }: NavGroupProps) => {
  const { drawerOpen } = useUIStore();
  const [ isCollapsed, setIsCollapsed ] = useState(false);
  let isCollapsable = false;

  const navCollapse = item.children?.map((menuItem) => {
    switch (menuItem.type) {
      case 'collapse':
        isCollapsable = true;
        return (
          <Collapse in={isCollapsed} key={menuItem.id}>
            <NavItem
              item={menuItem}
              level={1}/>
          </Collapse>
        );
      case 'item':
        return <NavItem
          key={menuItem.id}
          item={menuItem}
          level={1}
        />;
      default:
        return (
          <Typography key={menuItem.id}
            variant="h6"
            color="error"
            align="center">
            Fix - Group Collapse or Items
          </Typography>
        );
    }
  });

  return (
    <List
      subheader={
        item.title &&
        drawerOpen && (
          <Box sx={{ px: 3, mb: 1.5 }}>
            <AnimateButton>
              <Stack
                sx={{
                  cursor: 'pointer'
                }}
                direction="row"
                justifyContent={"space-between"}
                onClick={ ()=> setIsCollapsed(!isCollapsed) }>
                <Typography variant="subtitle2" color="textSecondary">
                  {item.title}
                </Typography>
                {
                  isCollapsable &&
                  isCollapsed ?
                  <DownOutlined color="secondary"/>
                  :
                  <LeftOutlined color="secondary"/>
                }
              </Stack>
            </AnimateButton>
          </Box>
        )
      }
      sx={{
        mb: drawerOpen ? 1.5 : 0,
        py: 0,
        zIndex: 0
      }}
    >
      {navCollapse}
    </List>
  );
};

export default NavGroup;
