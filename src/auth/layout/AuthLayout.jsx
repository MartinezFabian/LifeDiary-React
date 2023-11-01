import { Grid, Typography } from '@mui/material';
import 'animate.css';

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid
        className="animate__animated animate__fadeIn  animate__faster"
        item
        xs={3}
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2, width: { sm: 400, md: 500 } }}
      >
        <Typography variant="h5" sx={{ marginBottom: 1 }}>
          {title}
        </Typography>

        {children}
      </Grid>
    </Grid>
  );
};
