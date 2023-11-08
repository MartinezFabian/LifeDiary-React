import { Save } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components/ImageGallery';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

export const NoteView = () => {
  const { activeNote } = useSelector((state) => state.lifeDiary);
  const [formState, setFormState] = useState(activeNote);

  useEffect(() => {
    setFormState(activeNote);
  }, [activeNote]);

  const onFormChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const dateString = useMemo(() => {
    const dateFormat = new Date(formState.date);

    return dateFormat.toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }, [formState.date]);

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
            {dateString}
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
          name="title"
          onChange={onFormChange}
          value={formState.title}
        />

        <TextField
          id="outlined-multiline-static"
          type="text"
          label="What happened today?"
          multiline
          minRows={6}
          fullWidth
          sx={{ backgroundColor: '#fff', marginBottom: 1 }}
          name="body"
          onChange={onFormChange}
          value={formState.body}
        />
      </Grid>

      <ImageGallery></ImageGallery>
    </Grid>
  );
};
