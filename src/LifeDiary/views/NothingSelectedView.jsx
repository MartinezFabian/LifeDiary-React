import { Grid, Typography } from '@mui/material';
import RedoIcon from '@mui/icons-material/Redo';

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '94vh' }}
    >
      <Grid item xs={12}>
        <Typography variant="h5">Add a new entry</Typography>
      </Grid>

      <Grid item xs={12}>
        <RedoIcon sx={{ fontSize: '120px', color: 'primary.main' }}></RedoIcon>
      </Grid>
    </Grid>
  );
};
