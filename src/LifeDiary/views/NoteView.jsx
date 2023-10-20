import { Save } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components/ImageGallery';

export const NoteView = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      gap={4}
      padding={2}
      sx={{ maxWidth: '1000px', margin: '50px auto' }}
    >
      <Grid container direction="row" justifyContent="space-around" alignItems="center" gap={2}>
        <Grid item>
          <Typography fontSize={26} fontWeight="light">
            October 19, 2023
          </Typography>
        </Grid>

        <Grid item>
          <Button variant="contained" startIcon={<Save></Save>}>
            <Typography sx={{ marginLeft: 0.5 }}>Save</Typography>
          </Button>
        </Grid>
      </Grid>

      <Grid container direction="column" gap={2}>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          fullWidth
          sx={{ backgroundColor: '#fff', marginBottom: 1 }}
        />

        <TextField
          id="outlined-multiline-static"
          type="text"
          label="What happened today?"
          multiline
          minRows={6}
          fullWidth
          sx={{ backgroundColor: '#fff', marginBottom: 1 }}
        />
      </Grid>

      <ImageGallery></ImageGallery>
    </Grid>
  );
};
