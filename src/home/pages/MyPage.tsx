import { Box, Toolbar, Typography } from "@mui/material";
import { Navigation } from "src/Layout/interfaces";
import { Breadcrumbs, MainCard } from "src/components";
import menuItems from "src/menu-items";
import Header from "src/ui/Header";

export const MyPage = ()=>{
  const handleDrawerToggle = ()=>{

  };

  return (<>
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header open={false} handleDrawerToggle={handleDrawerToggle}/>
      <Box component="main"
        sx={{
          width: '100%',
          flexGrow: 1,
          p: { xs: 2, sm: 3 }
        }}>
        <Toolbar />
        <Breadcrumbs navigation={menuItems as Navigation} title />
        <MainCard title="My Page">
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ipsam repellendus? Quas porro voluptatum officia in odio earum culpa neque. Repellendus, officiis beatae obcaecati quibusdam odit enim quisquam? Mollitia, minima.
        </Typography>
        </MainCard>
      </Box>
    </Box>
  </>);
}
