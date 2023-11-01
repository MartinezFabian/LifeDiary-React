import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { MenuOutlined, LogoutOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/thunks/auth/startLogout';

export const Navbar = ({ drawerWidth, handleDrawerToggle }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <AppBar
      color="primary"
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" component="h3" noWrap>
            LifeDiary
          </Typography>

          <IconButton onClick={onLogout} color="grey">
            <LogoutOutlined></LogoutOutlined>
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
