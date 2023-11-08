import { Box, Divider, Toolbar, Drawer, Typography } from '@mui/material';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';
import { SideBarList } from './SideBarList';

export const SideBar = ({ drawerWidth, handleDrawerToggle, mobileOpen }) => {
  const { displayName } = useSelector((state) => state.auth);

  const drawer = (
    <div>
      <Toolbar sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <AccountCircleIcon></AccountCircleIcon>
        <Typography variant="h6" component="h3" noWrap marginLeft={1}>
          {displayName}
        </Typography>
      </Toolbar>
      <Divider />
      <SideBarList></SideBarList>
    </div>
  );

  const container = window.document.body;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
