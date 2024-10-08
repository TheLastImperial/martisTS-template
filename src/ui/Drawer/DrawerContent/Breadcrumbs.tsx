import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// material-ui
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import { Grid, Typography } from '@mui/material';
import { Menu, MenuItem } from 'src/ui/interfaces';
import { MainCard } from 'src/components';

interface BreadcrumbsProps{
  navigation: Menu[];
  title: boolean;
};

export const Breadcrumbs = ({
  navigation,
  title,
  ...others }: BreadcrumbsProps
) => {
  const location = useLocation();
  const [main, setMain] = useState<Menu>();
  const [menuItem, setMenuItem] = useState<MenuItem>();

  // set active item state
  const getCollapse = (menu: Menu) => {
    if (menu.children) {
      menu.children.filter((collapse) => {
        if (collapse.type && collapse.type === 'collapse') {
          getCollapse(collapse);
        } else if (collapse.type && collapse.type === 'item') {
          if (location.pathname === collapse.url) {
            setMain(menu);
            setMenuItem(collapse);
          }
        }
        return false;
      });
    }
  };

  useEffect(() => {
    navigation.map((menu) => {
      if (menu.type === 'group') {
        getCollapse(menu);
      }
      return false;
    });
  });

  // only used for component demo breadcrumbs
  if (location.pathname === '/breadcrumbs') {
    location.pathname = '/dashboard/analytics';
  }

  let mainContent;
  let itemContent;
  let breadcrumbContent = <Typography />;
  let itemTitle = '';

  // collapse item
  if (main && main.type === 'collapse') {
    mainContent = (
      <Typography component={Link}
        to={document.location.pathname}
        variant="h6"
        sx={{ textDecoration: 'none' }}
        color="textSecondary">
        {main.title}
      </Typography>
    );
  }

  // items
  if (menuItem && menuItem.type === 'item') {
    itemTitle = menuItem.title;
    itemContent = (
      <Typography variant="subtitle1" color="textPrimary">
        { itemTitle }
      </Typography>
    );

    // main
    if (menuItem.breadcrumbs !== false) {
      breadcrumbContent = (
        <MainCard border={false}
          sx={{ mb: 3, bgcolor: 'transparent' }}
          {...others}
          content={false}>
          <Grid container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}>
            <Grid item>
              <MuiBreadcrumbs aria-label="breadcrumb">
                <Typography component={Link} to="/"
                  color="textSecondary"
                  variant="h6"
                  sx={{ textDecoration: 'none' }}>
                  Home
                </Typography>
                {mainContent}
                {itemContent}
              </MuiBreadcrumbs>
            </Grid>
            {title && (
              <Grid item sx={{ mt: 2 }}>
                <Typography variant="h5">
                  { menuItem.title }
                </Typography>
              </Grid>
            )}
          </Grid>
        </MainCard>
      );
    }
  }

  return breadcrumbContent;
};
