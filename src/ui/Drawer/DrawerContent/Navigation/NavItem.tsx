import { forwardRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Avatar,
  Chip,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { useUIStore } from 'src/ui/hooks/useUIStore';
import { MenuItem } from 'src/ui/interfaces';
import { iconHelper } from 'src/ui/helpers/iconHelper';

// project import

export interface NavItemProps {
  item: MenuItem;
  level: number;
};

interface ListItemProps {
  component: React.ElementType,
  href?: string,
  target?: string
};

const NavItem = ({ item, level }: NavItemProps) => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const {
    drawerOpen,
    openItem,
    startActiveItem,
  } = useUIStore();

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }


  let listItemProps : ListItemProps = {
    component: forwardRef<HTMLAnchorElement>((props, ref) =>
      <Link ref={ref}
      {...props}
      to={item.url}
      target={itemTarget} />)
  };

  if (item?.external) {
    listItemProps = {
      component: 'a',
      href: item.url,
      target: itemTarget
    };
  }

  const itemHandler = (id: string) => {
    startActiveItem([id]);
  };
  let itemIcon;
  if(item.icon){
    const Icon = iconHelper(item.icon);
    itemIcon = <Icon style={{
      fontSize: drawerOpen ? '1rem' : '1.25rem'
    }} />;
  }else{
    itemIcon = false;
  }

  const isSelected = openItem.findIndex((id: string) => id === item.id) > -1;
  // active menu item on page load
  useEffect(() => {
    if (pathname.includes(item.url)) {
      startActiveItem([item.id]);
    }
    // eslint-disable-next-line
  }, [pathname]);

  const textColor = 'text.primary';
  const iconSelectedColor = 'primary.main';

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      onClick={() => itemHandler(item.id)}
      selected={isSelected}
      sx={{
        zIndex: 1201,
        pl: drawerOpen ? `${level * 28}px` : 1.5,
        py: !drawerOpen && level === 1 ? 1.25 : 1,
        ...(drawerOpen && {
          '&:hover': {
            bgcolor: 'primary.lighter'
          },
          '&.Mui-selected': {
            bgcolor: 'primary.lighter',
            borderRight: `2px solid ${theme.palette.primary.main}`,
            color: iconSelectedColor,
            '&:hover': {
              color: iconSelectedColor,
              bgcolor: 'primary.lighter'
            }
          }
        }),
        ...(!drawerOpen && {
          '&:hover': {
            bgcolor: 'transparent'
          },
          '&.Mui-selected': {
            '&:hover': {
              bgcolor: 'transparent'
            },
            bgcolor: 'transparent'
          }
        })
      }}
    >
      {itemIcon && (
        <ListItemIcon
          sx={{
            minWidth: 28,
            color: isSelected ? iconSelectedColor : textColor,
            ...(!drawerOpen && {
              borderRadius: 1.5,
              width: 36,
              height: 36,
              alignItems: 'center',
              justifyContent: 'center',
              '&:hover': {
                bgcolor: 'secondary.lighter'
              }
            }),
            ...(!drawerOpen &&
              isSelected && {
                bgcolor: 'primary.lighter',
                '&:hover': {
                  bgcolor: 'primary.lighter'
                }
              })
          }}
        >
          {itemIcon}
        </ListItemIcon>
      )}
      {(drawerOpen || (!drawerOpen && level !== 1)) && (
        <ListItemText
          primary={
            <Typography variant="h6"
              sx={{
                color: isSelected ? iconSelectedColor : textColor
              }}>
              {item.title}
            </Typography>
          }
        />
      )}
      {(drawerOpen || (!drawerOpen && level !== 1)) && item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )}
    </ListItemButton>
  );
};

export default NavItem;
